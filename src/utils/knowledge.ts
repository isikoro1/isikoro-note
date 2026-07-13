const directoryLabels: Record<string, string> = {
  tech: '技術',
  java: 'Java',
  web: 'Web',
  frontend: 'フロントエンド',
  network: 'ネットワーク',
  database: 'データベース',
  architecture: 'アーキテクチャ',
  work: '業務',
  finance: '金融ドメイン',
  projects: 'プロジェクト',
  nekotower: 'ねこタワー',
  routes: '学習ルート',
  tools: 'ツール',
  game: 'ゲーム',
  life: '生活',
};

const directoryOrder = [
  'tech/java',
  'tech/web',
  'tech/frontend',
  'tech/network',
  'tech/database',
  'tech/architecture',
  'work/finance',
  'projects/nekotower',
  'routes',
  'tools',
  'game',
  'life',
];

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

export function getDirectory(slug: string) {
  const parts = slug.split('/');
  return parts.slice(0, -1).join('/');
}

export function getSection(slug: string) {
  const directory = getDirectory(slug);
  return directory
    .split('/')
    .filter(Boolean)
    .map((part) => directoryLabels[part] ?? part)
    .join(' / ') || 'その他';
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
