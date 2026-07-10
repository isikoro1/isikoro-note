import type { APIRoute } from 'astro';

const metaModules = import.meta.glob('../content/knowledge/**/*.md', { eager: true });
const rawModules = import.meta.glob('../content/knowledge/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});

export const GET: APIRoute = () => {
  const docs = Object.entries(metaModules).map(([path, mod]: [string, any]) => {
    const slug = path.replace('../content/knowledge/', '').replace(/\.md$/, '');
    const raw = String((rawModules as Record<string, string>)[path] ?? '');
    const body = raw.replace(/^---[\s\S]*?---/, '').trim();

    return {
      slug,
      title: mod.frontmatter.title,
      summary: mod.frontmatter.summary,
      category: mod.frontmatter.category,
      type: mod.frontmatter.type,
      tags: mod.frontmatter.tags ?? [],
      aliases: mod.frontmatter.aliases ?? [],
      updated: mod.frontmatter.updated,
      body,
    };
  });

  return new Response(JSON.stringify(docs), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
    },
  });
};
