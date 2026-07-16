---
title: "サイト内検索"
summary: "石ころノートで使っているサイト内検索の作り方。Markdown本文を検索対象にし、ヒットした箇所の抜粋を表示する。"
category: "Tech"
type: "article"
status: "draft"
created: "2026-07-14"
updated: "2026-07-14"
tags: ["Astro", "Search", "JavaScript", "Markdown"]
aliases: ["検索機能", "本文検索", "サイト検索", "search.json", "コードで見る検索機能"]
keywords:
  - site search
  - search.json
  - Markdown
  - frontmatter
  - import.meta.glob
  - raw import
  - excerpt
  - snippet
  - highlight
  - mark
  - client-side search
  - URLSearchParams
  - history.replaceState
history:
  - date: "2026-07-14"
    text: "初版作成"
  - date: "2026-07-14"
    text: "コードで見る検索機能の内容を統合"
related:
  - title: "Astro"
    slug: "tech/frontend/astro"
  - title: "このサイトでAstroを選んだ理由"
    slug: "tech/frontend/why-this-site-uses-astro"
  - title: "React"
    slug: "tech/frontend/react"
---

## 概要

サイト内検索は、サイト内のページを対象に検索できるようにする機能です。
このノートでは、Markdownで書いた知識ページを検索対象にし、タイトルだけでなく本文・概要・キーワード・別名も検索できるようにしています。

検索機能は、大きく分けると次の2段階です。

- `search.json.ts` で検索用データを作る
- `index.astro` のJavaScriptで検索結果を表示する

サーバー側に検索エンジンを持つのではなく、静的に生成したJSONをブラウザ側で検索しています。
このサイトの規模なら、まずはこの方式で十分です。

## このサイトでの構成

主なファイルは次の通りです。

- `src/pages/search.json.ts`: 検索用データを生成する
- `src/pages/index.astro`: 検索フォームと検索結果の表示を行う
- `src/styles/global.css`: 検索結果、抜粋、ハイライトの見た目を定義する
- `src/content/knowledge/**/*.md`: 検索対象のMarkdownページ

## 1. Markdownを集める

`search.json.ts` では、Astroの `import.meta.glob` を使ってMarkdownをまとめて読み込みます。

```ts
const metaModules = import.meta.glob('../content/knowledge/**/*.md', { eager: true });
const rawModules = import.meta.glob('../content/knowledge/**/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
});
```

ここで2種類に分けているのがポイントです。

- `metaModules`: frontmatterを読むため
- `rawModules`: Markdown本文を文字列として読むため

普通にMarkdownを読み込むだけだと、タイトルや概要などのfrontmatterは扱いやすいですが、本文検索用の文字列を取り出しにくいです。
そのため、`?raw` でMarkdownファイルそのものを文字列として読み込んでいます。

## 2. slugを作る

検索結果から記事ページへリンクするために、ファイルパスからslugを作ります。

```ts
const slug = path.replace('../content/knowledge/', '').replace(/\.md$/, '');
```

たとえば、次のファイルがあるとします。

```text
src/content/knowledge/tech/frontend/site-search.md
```

この場合、slugは次のようになります。

```text
tech/frontend/site-search
```

実際のページURLでは、これを使って次のようにリンクできます。

```text
/knowledge/tech/frontend/site-search/
```

## 3. frontmatterと本文を検索データにする

`search.json.ts` では、各Markdownから検索に必要な情報だけを取り出します。

```ts
return {
  slug,
  title: mod.frontmatter.title,
  summary: mod.frontmatter.summary,
  category: mod.frontmatter.category,
  type: mod.frontmatter.type,
  keywords: mod.frontmatter.keywords ?? [],
  tags: mod.frontmatter.tags ?? [],
  aliases: mod.frontmatter.aliases ?? [],
  updated: mod.frontmatter.updated,
  body,
};
```

ここで重要なのは、検索対象をタイトルだけにしていないことです。

- `title`: ページタイトル
- `summary`: 概要
- `keywords`: 検索用キーワード
- `tags`: 分類用タグ
- `aliases`: 別名・表記揺れ
- `body`: Markdown本文

これにより、ページタイトルに含まれていない単語でも、本文に書いてあれば検索に出せます。

## 4. frontmatterを本文から除く

rawでMarkdownを読むと、ファイル先頭のfrontmatterも本文に含まれます。
そのままだと検索結果の抜粋に `title:` や `tags:` が出やすくなります。

そこで、次の処理でfrontmatter部分を取り除きます。

```ts
const body = raw.replace(/^---[\s\S]*?---/, '').trim();
```

`---` で囲まれた先頭ブロックを消して、本文だけを検索用データにします。

## 5. ブラウザ側で search.json を取得する

トップページ側では、生成された `search.json` を `fetch` で読み込みます。

```js
fetch(makeUrl('search.json'))
  .then((res) => res.json())
  .then((data) => {
    docs = data;
    const params = new URLSearchParams(window.location.search);
    const initialQuery = params.get('q') ?? input?.value ?? '';
    if (input && initialQuery) input.value = initialQuery;
    applySearch(initialQuery, false);
  });
```

ここでやっていることは次の通りです。

- `search.json` を取得する
- JSONを配列として `docs` に入れる
- URLの `q` パラメータを読む
- 初期検索語があれば検索欄に入れる
- 初期検索結果を表示する

これにより、`?q=Astro` のようなURLでも検索状態を復元できます。

## 6. 検索語を正規化する

検索では、大文字小文字の違いを無視したいので、比較前に小文字化します。

```js
const normalize = (value) => String(value ?? '').toLowerCase();
```

この処理により、`Astro` と `astro` を同じように扱えます。
日本語検索では大文字小文字の恩恵は少ないですが、`REST`、`API`、`JavaScript`、`Astro` のような英字を検索するときに効きます。

## 7. どの項目でヒットしたか調べる

検索結果では、単にページを出すだけでなく、どこにヒットしたかも表示します。

```js
const fields = [
  { label: 'タイトル', value: doc.title },
  { label: '概要', value: doc.summary },
  { label: 'キーワード', value: [...(doc.keywords ?? []), ...(doc.tags ?? []), ...(doc.aliases ?? [])].join(' / ') },
  { label: '本文', value: stripMarkdown(doc.body) },
];
```

この配列を上から順に見て、最初にヒットした場所を検索結果に表示します。

表示ラベルは次のようになります。

```text
タイトルでヒット
概要でヒット
キーワードでヒット
本文でヒット
```

検索した人にとっては、なぜそのページが出てきたのかが分かりやすくなります。

## 8. Markdown記法を抜粋から減らす

本文はMarkdownなので、そのまま抜粋すると `##` やリンク記法が出ます。
検索結果では読みにくいため、簡易的にMarkdown記法を取り除きます。

```js
const stripMarkdown = (value) => String(value ?? '')
  .replace(/^#+\s+/gm, '')
  .replace(/`([^`]+)`/g, '$1')
  .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1')
  .replace(/[>*_\-]/g, ' ')
  .replace(/\s+/g, ' ')
  .trim();
```

これは本格的なMarkdownパーサーではありません。
ただし、検索結果の抜粋を読みやすくする目的なら、この程度でも十分役に立ちます。

## 9. ヒット箇所の前後を抜粋する

本文全体を表示すると長すぎるため、ヒット位置の前後だけを切り出します。

```js
const index = normalize(text).indexOf(normalizedQuery);
const start = Math.max(0, index - 45);
const end = Math.min(text.length, index + normalizedQuery.length + 70);
const prefix = start > 0 ? '…' : '';
const suffix = end < text.length ? '…' : '';
const excerpt = `${prefix}${text.slice(start, end)}${suffix}`;
```

この処理では、検索語の前を45文字、後ろを70文字くらい表示しています。
抜粋の目的は、本文を読ませることではありません。
検索結果に出た理由を短く見せることです。

## 10. ヒットした文字を強調する

抜粋内の検索語は `<mark>` で囲んで強調します。

```js
const highlight = (text, query) => {
  const rawText = String(text ?? '');
  const rawQuery = String(query ?? '').trim();
  if (!rawQuery) return escapeHtml(rawText);

  const lowerText = rawText.toLowerCase();
  const lowerQuery = rawQuery.toLowerCase();
  let cursor = 0;
  let html = '';

  while (cursor < rawText.length) {
    const index = lowerText.indexOf(lowerQuery, cursor);
    if (index === -1) {
      html += escapeHtml(rawText.slice(cursor));
      break;
    }

    html += escapeHtml(rawText.slice(cursor, index));
    html += `<mark>${escapeHtml(rawText.slice(index, index + rawQuery.length))}</mark>`;
    cursor = index + rawQuery.length;
  }

  return html;
};
```

ここで `escapeHtml` しているのは、検索結果にHTMLをそのまま混ぜないためです。
検索結果は `innerHTML` で描画しているため、HTMLエスケープをしないと、本文中の文字列が意図せずHTMLとして解釈される可能性があります。

## 11. 検索ボタンでリセットされないようにする

検索フォームを普通に送信すると、ページが再読み込みされます。
それを防ぐために、`submit` イベントで `preventDefault()` します。

```js
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  applySearch(input?.value ?? '');
});
```

これにより、検索ボタンを押してもページ遷移せず、現在の画面のまま検索結果を更新できます。

## 12. URLに検索語を残す

検索語はURLの `q` パラメータにも反映しています。

```js
const nextUrl = new URL(window.location.href);
if (value) {
  nextUrl.searchParams.set('q', value);
} else {
  nextUrl.searchParams.delete('q');
}
window.history.replaceState({}, '', nextUrl);
```

これにより、検索後のURLをコピーすると、同じ検索状態を共有できます。
ページ遷移ではなく `history.replaceState` を使っているので、再読み込みせずにURLだけを更新できます。

## この実装の限界

この検索は、軽量なクライアントサイド検索です。
そのため、次のような限界があります。

- ページ数が増えると `search.json` が大きくなる
- 曖昧検索や形態素解析はしていない
- スコアリングはしていない
- 複数語検索は簡易的
- 表記ゆれは `aliases` や `keywords` に頼る

ただし、個人のノートや小さなドキュメントサイトなら、まずはこの方式で十分です。
検索精度を上げたくなったら、次にインデックス作成や検索ライブラリの導入を考えます。

## 見るときの観点

このコードを見るときは、次の順番で追うと分かりやすいです。

- Markdownをどう集めているか
- 検索用JSONに何を入れているか
- ブラウザ側でどう読み込んでいるか
- どの項目を検索対象にしているか
- ヒット箇所をどう抜粋しているか
- フォーム送信をどう止めているか

## 関連する概念

- Astro
- Markdown
- frontmatter
- JSON
- Fetch API
- DOM操作
- `URLSearchParams`
- `history.replaceState`
- HTMLエスケープ

## 参考文献

- Astro: `import.meta.glob`
- MDN Web Docs: Fetch API
- MDN Web Docs: `URLSearchParams`
- MDN Web Docs: History API
