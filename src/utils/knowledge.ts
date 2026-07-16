const directoryLabels: Record<string, string> = {
  projects: 'プロジェクト',
  deep: '深掘りノート',
  terms: 'IT用語メモ',
  routes: '学習ルート',
  reverse: '逆引き辞典',
  notes: 'ノート',
};

const directoryOrder = [
  'projects',
  'deep',
  'terms',
  'routes',
  'reverse',
  'notes',
];

const deepNoteSlugs = new Set([
  'tech/frontend/astro',
  'tech/frontend/astro-adoption',
  'tech/frontend/why-this-site-uses-astro',
  'tech/frontend/site-search',
  'tech/frontend/site-search-code',
  'tech/architecture/clean-architecture',
  'tech/architecture/layered-architecture',
]);

export type KnowledgeNote = {
  slug: string;
  section: string;
  directory: string;
  title?: string;
  summary?: string;
  listed?: boolean;
  updated?: string;
  [key: string]: unknown;
};

function getProjectDirectory(slug: string) {
  if (!slug.startsWith('projects/')) return null;

  const parts = slug.split('/');
  if (parts.length === 2) return 'projects';
  if (parts[2] === 'overview') return 'projects';

  return null;
}

export function getDirectory(slug: string) {
  const projectDirectory = getProjectDirectory(slug);
  if (projectDirectory) return projectDirectory;

  if (deepNoteSlugs.has(slug)) return 'deep';
  if (slug.startsWith('routes/')) return 'routes';
  if (slug.startsWith('reverse/')) return 'reverse';
  if (slug.startsWith('notes/')) return 'notes';
  if (slug.startsWith('tech/') || slug.startsWith('work/') || slug.startsWith('tools/')) return 'terms';

  const parts = slug.split('/');
  return parts.slice(0, -1).join('/') || 'notes';
}

export function getSection(slug: string) {
  const directory = getDirectory(slug);
  return directoryLabels[directory] ?? directory;
}

export function getDirectorySortKey(directory: string) {
  const index = directoryOrder.indexOf(directory);
  return index === -1 ? 999 : index;
}

export function groupNotesByDirectory(notes: KnowledgeNote[]) {
  const groups = new Map<string, KnowledgeNote[]>();

  for (const note of notes) {
    if (note.listed === false) continue;

    const groupNotes = groups.get(note.directory) ?? [];
    groupNotes.push(note);
    groups.set(note.directory, groupNotes);
  }

  return [...groups.entries()]
    .map(([directory, groupNotes]) => ({
      directory,
      section: getSection(`${directory}/index`),
      notes: groupNotes.sort((a, b) => String(a.title ?? '').localeCompare(String(b.title ?? ''), 'ja')),
    }))
    .sort((a, b) => {
      const order = getDirectorySortKey(a.directory) - getDirectorySortKey(b.directory);
      if (order !== 0) return order;
      return a.section.localeCompare(b.section, 'ja');
    });
}

export function getRecentNotes(notes: KnowledgeNote[], limit = 6) {
  return [...notes]
    .filter((note) => note.updated)
    .sort((a, b) => {
      const byDate = String(b.updated ?? '').localeCompare(String(a.updated ?? ''));
      if (byDate !== 0) return byDate;
      return String(a.title ?? '').localeCompare(String(b.title ?? ''), 'ja');
    })
    .slice(0, limit);
}
