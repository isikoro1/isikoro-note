---
title: "Astroはどこで使われているのか"
summary: "Astroという技術がどのようなサイトで使われているのかを、公式情報をもとに整理する。"
category: "Tech"
type: "column"
status: "draft"
listed: false
created: "2026-07-14"
updated: "2026-07-14"
tags: ["Astro", "Frontend", "Static Site", "Case Study"]
aliases: ["Astro利用例", "Astro adoption", "Astro事例"]
keywords:
  - Astro Showcase
  - content-driven website
  - marketing site
  - documentation
  - blog
  - static site
  - Islands Architecture
history:
  - date: "2026-07-14"
    text: "初版作成"
related:
  - title: "Astro"
    slug: "tech/frontend/astro"
  - title: "このサイトでAstroを選んだ理由"
    slug: "tech/frontend/why-this-site-uses-astro"
---

## 概要

Astroは、ReactやNext.jsほど日常的に名前を聞く技術ではありません。
ただし、公式ドキュメントでは、ブログ、マーケティングサイト、ドキュメント、ポートフォリオ、ランディングページ、コミュニティサイト、ECサイトなど、コンテンツ中心のWebサイト向けのフレームワークとして説明されています。

つまり、管理画面やSNSのようなアプリケーションというより、文章・ページ・情報を見せるサイトで使いやすい技術です。

## どこで使われているのか

Astro公式のShowcaseには、Astroで作られたサイト例が掲載されています。
掲載例には、Unilever、IKEA、Marie Curie、Netlify、Porsche、Cloudflare、Firebase Studio、The Guardian Engineering、Michelin、Proton、Visa Product Design System、Firebase Blog、Microsoft Fluent 2 Design System、NordVPN、StackBlitz Blog、Cloudflare Docs、Netlify Documentation などがあります。

これは、Astroが個人ブログだけでなく、企業サイト、ブランドサイト、ドキュメント、技術ブログ、デザインシステム、プロダクト紹介ページでも使われていることを示しています。

## 向いている用途

Astroが向いているのは、主に次のようなサイトです。

- 技術ブログ
- ドキュメント
- ナレッジベース
- ポートフォリオ
- 会社・サービス紹介サイト
- ランディングページ
- デザインシステムのドキュメント
- 静的に公開できる情報サイト

特に、Markdownで記事やページを増やしていくサイトとは相性が良いです。

## 向いていない用途

一方で、Astroは何でも作るための万能フレームワークではありません。

次のような用途では、Next.js、Remix、SvelteKit、Laravel、Railsなど別の選択肢も検討します。

- ログイン後の複雑な管理画面
- SNSのようなリアルタイム性の高いアプリ
- ブラウザ上で状態を大量に持つSPA
- 複雑なフォームや権限管理を中心にした業務アプリ

Astroでも動的な機能は作れますが、基本思想はコンテンツ中心です。
そのため、情報を整理して公開するサイトに向いています。

## 所感

Astroは、聞きなじみだけで見るとややマイナーに見えます。
しかし、公式Showcaseを見る限り、企業サイトやドキュメントサイトでも使われています。

このサイトのように、Markdownで知識ページを増やし、GitHub Pagesで静的に公開する用途なら、Astroはかなり自然な選択です。

## 参考文献

- Astro Docs: Why Astro?
- Astro Docs: Islands architecture
- Astro: Showcase

## 外部リンク

- [Astro Docs: Why Astro?](https://docs.astro.build/en/concepts/why-astro/)
- [Astro Docs: Islands architecture](https://docs.astro.build/en/concepts/islands/)
- [Astro Showcase](https://astro.build/showcase/)
