---
title: "サイト内検索"
summary: "石ころ技術マップで使っているサイト内検索の作り方。Markdown本文を検索対象にし、ヒットした箇所の抜粋を表示する。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-14"
updated: "2026-07-14"
tags: ["Astro", "Search", "JavaScript", "Markdown"]
aliases: ["検索機能", "本文検索", "サイト検索", "search.json"]
keywords:
  - site search
  - search.json
  - Markdown
  - frontmatter
  - excerpt
  - snippet
  - highlight
  - mark
  - client-side search
history:
  - date: "2026-07-14"
    text: "初版作成"
related:
  - title: "Astro"
    slug: "tech/frontend/astro"
  - title: "このサイトでAstroを選んだ理由"
    slug: "tech/frontend/why-this-site-uses-astro"
  - title: "REST API"
    slug: "tech/web/rest-api"
---

## 概要

サイト内検索は、サイト内のページを対象に検索できるようにする機能です。
この技術マップでは、Markdownで書いた知識ページを検索対象にし、タイトルだけでなく本文・概要・キーワード・別名も検索できるようにしています。

## このサイトでの構成

このサイトでは、検索専用のJSONを生成し、トップページ側のJavaScriptで検索しています。

主なファイルは次の通りです。

- `src/pages/search.json.ts`: 検索用データを生成する
- `src/pages/index.astro`: 検索フォームと検索結果の表示を行う
- `src/styles/global.css`: 検索結果、抜粋、ハイライトの見た目を定義する
- `src/content/knowledge/**/*.md`: 検索対象のMarkdownページ

## 検索用データの作り方

`search.json.ts` では、Astroの `import.meta.glob` を使って Markdown ファイルを集めています。

メタ情報だけでなく、Markdown本文も読み込むために、通常の読み込みと `?raw` の読み込みを分けます。

- 通常読み込み: frontmatter を取得する
- raw読み込み: Markdown本文を文字列として取得する

生成する検索データには、次の情報を入れます。

- slug
- title
- summary
- category
- type
- keywords
- tags
- aliases
- updated
- body

これにより、タイトルだけでなく本文検索もできるようになります。

## 検索結果の出し方

トップページでは、`search.json` を `fetch` で取得し、入力された文字列と各ページの情報を比較します。

検索対象は次のようにします。

- タイトル
- 概要
- キーワード
- タグ
- 別名
- 本文

一致したページは、検索結果として表示します。
本文でヒットした場合は、ヒット箇所の前後だけを抜き出して表示します。

## 抜粋表示

本文全体を検索結果に表示すると長すぎます。
そのため、ヒットした位置を探し、その前後だけを切り出します。

考え方は次の通りです。

- 検索語が出てくる位置を探す
- その前後の文字を少しだけ取る
- 先頭や末尾を省略した場合は `…` を付ける
- ヒットした文字列を `<mark>` で強調する

これにより、検索した人が「なぜこのページが出たのか」を理解しやすくなります。

## フォーム送信の扱い

検索フォームを普通に送信すると、ページ遷移や再読み込みが起きます。
このサイトでは、検索ボタンを押してもページがリセットされないように、JavaScriptで `submit` イベントを止めています。

検索語はURLの `q` パラメータにも反映します。
これにより、検索状態を残したURLとして扱えます。

## 見るときの観点

検索機能を見るときは、次の観点が重要です。

- タイトルだけでなく本文も検索できるか
- なぜ検索結果に出たのか分かるか
- 検索ボタンを押しても状態が消えないか
- 検索結果が長くなりすぎないか
- Markdown記法が抜粋に出すぎて読みにくくならないか

## 関連する概念

- Astro
- Markdown
- frontmatter
- JSON
- クライアントサイド検索
- 検索インデックス
- 抜粋表示
- ハイライト表示

## 参考文献

- Astro: `import.meta.glob`
- MDN Web Docs: Fetch API
- MDN Web Docs: `URLSearchParams`
