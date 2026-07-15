---
title: "このサイトでAstroを選んだ理由"
summary: "石ころ技術マップでAstroを使う理由を、サイトの性質と運用方針から整理する。"
category: "Tech"
type: "column"
status: "draft"
listed: false
created: "2026-07-14"
updated: "2026-07-14"
tags: ["Astro", "設計判断", "技術選定", "Markdown"]
aliases: ["Astro選定理由", "なぜAstro", "石ころ技術マップの技術選定"]
keywords:
  - Markdown
  - 静的サイト
  - GitHub Pages
  - Content Collections
  - knowledge base
  - content-driven
  - 技術選定
history:
  - date: "2026-07-14"
    text: "初版作成"
related:
  - title: "Astro"
    slug: "tech/frontend/astro"
  - title: "Astroはどこで使われているのか"
    slug: "tech/frontend/astro-adoption"
---

## 概要

このサイトでAstroを使う理由は、石ころ技術マップがWebアプリというより、Markdownで育てる知識サイトだからです。

検索、タブ、更新履歴のような軽い動きはありますが、中心にあるのは記事・用語・リンクです。
そのため、最初から重いSPAとして作るより、静的なHTMLを生成できるAstroの方が合っています。

## このサイトの性質

石ころ技術マップは、次のようなサイトです。

- Markdownでページを追加する
- 用語ページを増やしていく
- 関連項目でページ同士をつなげる
- GitHubで履歴を管理する
- GitHub Pagesで静的に公開する
- 読むことが中心で、複雑なログイン機能はない

これは、Astroが得意とするコンテンツ中心のサイトに近いです。

## Astroを選ぶ理由

### Markdownをそのまま知識ページにしやすい

AstroはMarkdownと相性が良く、`src/content/knowledge/` にMarkdownを置くことで、知識ページとして扱えます。

このサイトでは、用語ページを1つずつ追加して、あとから更新履歴や関連項目を足していく運用をしています。
Markdown中心の構成は、この運用に合っています。

### 静的サイトとして公開しやすい

Astroは静的HTMLを生成できます。
そのため、GitHub Pagesに置くだけで公開できます。

サーバー、DB、認証、APIを用意しなくても、まず知識サイトとして成立します。
個人運用では、これは大きいです。

### Reactほど重くしなくてよい

ReactやNext.jsは、アプリケーションを作るには強いです。
ただし、このサイトの中心は状態をたくさん持つUIではなく、文章とリンクです。

検索やタブ程度なら、素のJavaScriptでも十分です。
そのため、サイト全体をReactアプリにする必要はありません。

### 必要になったら拡張できる

Astroは、React、Vue、SvelteなどのUIコンポーネントも必要に応じて使えます。

つまり、基本は静的サイトとして軽く保ちつつ、必要な部分だけインタラクティブにできます。
この「必要なところだけ足す」考え方は、技術マップの運用と相性が良いです。

## 他の選択肢との比較

### React / Vite

シンプルなWebアプリを作るなら良い選択です。
ただし、Markdownを中心にした知識サイトとしては、自前でルーティングや記事管理を考える部分が増えます。

### Next.js

本格的なWebアプリやSSRが必要なサイトには強いです。
ただし、このサイトのような静的な知識マップには、やや大きめです。

### Hugo / Jekyll

静的サイト生成としては強い選択肢です。
ただし、JavaScript / TypeScript の文脈で拡張しやすく、必要に応じてUIを足しやすい点ではAstroが扱いやすいです。

## このサイトでの結論

石ころ技術マップでは、Astroを選ぶ理由は次の通りです。

- Markdownでページを増やしやすい
- 静的サイトとして公開しやすい
- GitHub Pagesと相性が良い
- コンテンツ中心のサイトに向いている
- 必要な部分だけJavaScriptを足せる
- 将来、Reactなどを部分的に使う余地もある

したがって、このサイトではAstroを使う判断は妥当です。
逆に、ログイン、投稿画面、ユーザー管理、DB連携が中心になってきたら、別の技術選定も考える必要があります。

## 参考文献

- Astro Docs: Why Astro?
- Astro Docs: Islands architecture
- Astro Docs: Content collections

## 外部リンク

- [Astro Docs: Why Astro?](https://docs.astro.build/en/concepts/why-astro/)
- [Astro Docs: Islands architecture](https://docs.astro.build/en/concepts/islands/)
- [Astro Docs: Content collections](https://docs.astro.build/en/guides/content-collections/)
