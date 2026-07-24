import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import process from 'node:process';

const root = path.resolve('src/content/knowledge');
const requiredFields = ['title', 'summary', 'type', 'status', 'updated'];
const errors = [];
const warnings = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walk(fullPath));
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      files.push(fullPath);
    }
  }

  return files;
}

function getFrontmatter(source, file) {
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) {
    errors.push(`${file}: frontmatterがありません`);
    return '';
  }
  return match[1];
}

function hasField(frontmatter, field) {
  return new RegExp(`^${field}:\\s*.+$`, 'm').test(frontmatter);
}

function normalizeKnowledgeLink(link) {
  const withoutHash = link.split('#')[0].split('?')[0];
  const prefix = '/isikoro-note/knowledge/';
  if (!withoutHash.startsWith(prefix)) return null;
  return withoutHash.slice(prefix.length).replace(/\/$/, '');
}

const files = await walk(root);
const notes = new Map();

for (const file of files) {
  const source = await readFile(file, 'utf8');
  const relative = path.relative(root, file).replaceAll(path.sep, '/');
  const slug = relative.replace(/\.md$/, '');
  const frontmatter = getFrontmatter(source, relative);

  if (notes.has(slug)) {
    errors.push(`${relative}: slugが重複しています: ${slug}`);
  }

  notes.set(slug, { relative, source, frontmatter });

  for (const field of requiredFields) {
    if (!hasField(frontmatter, field)) {
      warnings.push(`${relative}: ${field} がありません`);
    }
  }
}

for (const [slug, note] of notes) {
  const relatedSlugs = [...note.frontmatter.matchAll(/^\s+slug:\s*["']?([^"'\r\n]+)["']?\s*$/gm)]
    .map((match) => match[1].trim());

  for (const target of relatedSlugs) {
    if (!notes.has(target)) {
      errors.push(`${note.relative}: relatedの参照先が存在しません: ${target}`);
    }
  }

  const links = [...note.source.matchAll(/\]\((\/isikoro-note\/knowledge\/[^)\s]+)\)/g)]
    .map((match) => match[1]);

  for (const link of links) {
    const target = normalizeKnowledgeLink(link);
    if (target && !notes.has(target)) {
      errors.push(`${note.relative}: 内部リンクの参照先が存在しません: ${link}`);
    }
  }

  if (slug !== 'start/about' && relatedSlugs.length === 0) {
    warnings.push(`${note.relative}: relatedがありません`);
  }
}

for (const warning of warnings) {
  console.warn(`WARN: ${warning}`);
}

if (errors.length > 0) {
  for (const error of errors) {
    console.error(`ERROR: ${error}`);
  }
  console.error(`\nコンテンツチェック失敗: ${errors.length}件`);
  process.exit(1);
}

console.log(`コンテンツチェック完了: ${files.length}ページ、警告${warnings.length}件`);
