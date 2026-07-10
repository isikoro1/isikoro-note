---
title: "Astro"
summary: "Markdownやコンポーネントから静的サイトを生成できる、コンテンツ中心のWebフレームワーク。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-10"
tags: ["Astro", "Static Site", "Markdown", "Frontend"]
aliases: ["Astro.js", "静的サイトジェネレーター", "SSG"]
related:
  - title: "Markdown"
    slug: "tools/visual-blocks"
  - title: "Java金融バックエンド学習ルート"
    slug: "routes/java-finance-backend"
---

## ざっくり

Astro は、Markdownやコンポーネントを使って静的サイトを作れるWebフレームワークです。
ブログ、ドキュメント、ナレッジベース、ポートフォリオのような、コンテンツ中心のサイトと相性が良いです。

## 何に使う？

このサイトでは、Markdownファイルを `src/content/knowledge/` に置き、それをページとして表示するために使っています。
GitHub Pages に静的ファイルとしてデプロイできるので、サーバーやDBを用意しなくても公開できます。

## Reactとの違い

React単体はWebアプリを作る色が強いですが、Astroは静的な情報サイトを作る用途に向いています。
必要なところだけJavaScriptを使えるため、文章中心のサイトを軽く作りやすいです。

## このサイトでの見る場所

- `src/pages/`: URLになるページ
- `src/layouts/`: 共通レイアウト
- `src/content/knowledge/`: Markdownの知識ページ
- `src/styles/global.css`: 全体の見た目
- `.github/workflows/deploy.yml`: GitHub Pagesへのデプロイ

## 自分用メモ

石ころノートでは、Astroを「ブログエンジン」ではなく「Markdownナレッジベースの生成器」として使う。
