---
title: "逆引き辞典"
summary: "困りごとや作りたい機能から、関連するノートを探すための入口。"
category: "Note"
type: "index"
status: "draft"
created: "2026-07-16"
updated: "2026-07-16"
tags: ["逆引き", "調べ方", "ノート"]
aliases: ["困りごとから探す", "目的別索引", "逆引き"]
keywords:
  - reverse lookup
  - troubleshooting
  - how to find
  - site search
  - architecture
  - database
history:
  - date: "2026-07-16"
    text: "初版作成"
related:
  - title: "サイト内検索"
    slug: "tech/frontend/site-search"
  - title: "Astro"
    slug: "tech/frontend/astro"
  - title: "レイヤードアーキテクチャ"
    slug: "tech/architecture/layered-architecture"
---

## 概要

逆引き辞典は、用語名から探すのではなく、困りごとや作りたい機能から関連するノートを探すための入口です。

通常の用語メモは「トランザクション」「インデックス」「Astro」のように名前から入ります。
逆引き辞典では、「検索機能を作りたい」「画面と業務処理を分けたい」「DBが遅い原因を調べたい」のような目的から入ります。

## 使い方

まずは大きな困りごとを選び、そこから関連するノートに移動します。

## 機能を作りたい

- サイト内検索を作りたい → [サイト内検索](/isikoro-note/knowledge/tech/frontend/site-search/)
- 検索機能のコードを読みたい → [コードで見る検索機能](/isikoro-note/knowledge/tech/frontend/site-search-code/)
- Markdownからページを作りたい → [Astro](/isikoro-note/knowledge/tech/frontend/astro/)
- 静的サイトとして公開したい → [このサイトでAstroを選んだ理由](/isikoro-note/knowledge/tech/frontend/why-this-site-uses-astro/)

## 設計を整理したい

- 画面、業務処理、DBアクセスを分けたい → [レイヤードアーキテクチャ](/isikoro-note/knowledge/tech/architecture/layered-architecture/)
- ビジネスルールを中心に設計したい → [クリーンアーキテクチャ](/isikoro-note/knowledge/tech/architecture/clean-architecture/)
- Controller / Service / DAO の役割を考えたい → [MVC](/isikoro-note/knowledge/tech/architecture/mvc/)

## DBまわりで困った

- 処理を途中で壊したくない → [Transaction](/isikoro-note/knowledge/tech/database/transaction/)
- DB接続を使い回したい → [コネクションプール](/isikoro-note/knowledge/tech/database/connection-pool/)
- 検索やJOINが遅い → [Index](/isikoro-note/knowledge/tech/database/db-index/)
- 同時更新が怖い → [排他制御](/isikoro-note/knowledge/tech/database/exclusive-control/)
- 処理が互いに待ち続ける → [Deadlock](/isikoro-note/knowledge/tech/database/deadlock/)

## Webまわりで困った

- APIの設計方針を知りたい → [REST API](/isikoro-note/knowledge/tech/web/rest-api/)
- ログイン状態を扱いたい → [Session](/isikoro-note/knowledge/tech/web/session/)
- ブラウザに情報を持たせたい → [Cookie](/isikoro-note/knowledge/tech/web/cookie/)
- トークン認証を整理したい → [JWT](/isikoro-note/knowledge/tech/web/jwt/)

## 今後の方針

最初から完全な辞典にしようとすると重くなります。
まずは、自分が実装や学習で詰まった項目を少しずつ追加します。

逆引き辞典は、深掘りノートとIT用語メモをつなぐための索引として使います。
