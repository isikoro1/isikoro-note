---
title: "Astro"
summary: "Markdownやコンポーネントから静的サイトを生成できる、コンテンツ中心のWebフレームワーク。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-10"
updated: "2026-07-14"
tags: ["Astro", "Static Site", "Markdown", "Frontend"]
aliases: ["Astro.js", "静的サイトジェネレーター", "SSG"]
keywords:
  - Static Site Generation
  - content-driven website
  - Markdown
  - Content Collections
  - Islands Architecture
  - GitHub Pages
  - Vite
history:
  - date: "2026-07-10"
    text: "初版作成"
  - date: "2026-07-14"
    text: "Astroの利用例と、このサイトでの選定理由への子ページを追加"
related:
  - title: "Astroはどこで使われているのか"
    slug: "tech/frontend/astro-adoption"
  - title: "このサイトでAstroを選んだ理由"
    slug: "tech/frontend/why-this-site-uses-astro"
  - title: "Markdown"
    slug: "tools/visual-blocks"
  - title: "Java金融バックエンド学習ルート"
    slug: "routes/java-finance-backend"
---

## 概要

Astro は、Markdownやコンポーネントを使って静的サイトを作れるWebフレームワークです。
ブログ、ドキュメント、ナレッジベース、ポートフォリオのような、コンテンツ中心のサイトと相性が良いです。

## 内容

このサイトでは、Markdownファイルを `src/content/knowledge/` に置き、それをページとして表示するために使っています。
GitHub Pages に静的ファイルとしてデプロイできるので、サーバーやDBを用意しなくても公開できます。

## 掘り下げ

- [Astroはどこで使われているのか](/isikoro-note/knowledge/tech/frontend/astro-adoption/)
- [このサイトでAstroを選んだ理由](/isikoro-note/knowledge/tech/frontend/why-this-site-uses-astro/)

## Reactとの違い

React単体はWebアプリを作る色が強いですが、Astroは静的な情報サイトを作る用途に向いています。
必要なところだけJavaScriptを使えるため、文章中心のサイトを軽く作りやすいです。

## このサイトでの見る場所

- `src/pages/`: URLになるページ
- `src/layouts/`: 共通レイアウト
- `src/content/knowledge/`: Markdownの知識ページ
- `src/styles/global.css`: 全体の見た目
- `.github/workflows/deploy.yml`: GitHub Pagesへのデプロイ
