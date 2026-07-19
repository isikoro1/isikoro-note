---
title: "アーキテクチャ"
summary: "設計・設計思想に関するページをまとめる入口。"
category: "Tech"
type: "index"
status: "draft"
created: "2026-07-17"
updated: "2026-07-19"
tags: ["アーキテクチャ", "設計", "設計思想"]
aliases: ["設計", "設計思想", "Architecture"]
keywords:
  - architecture
  - design
  - clean architecture
  - layered architecture
  - readable code
  - AI駆動開発
history:
  - date: "2026-07-17"
    text: "初版作成"
  - date: "2026-07-19"
    text: "AI駆動開発を追加"
related:
  - title: "クリーンアーキテクチャ"
    slug: "tech/architecture/clean-architecture"
  - title: "レイヤードアーキテクチャ"
    slug: "tech/architecture/layered-architecture"
  - title: "リーダブルコード"
    slug: "tech/architecture/readable-code"
  - title: "AI駆動開発"
    slug: "tech/development/ai-driven-development"
---

## 概要

アーキテクチャは、コードや機能をどう分け、どう依存させ、どう変更に強くするかを考えるためのページ群です。

ここでは、特定の実装技術そのものよりも、構造、責務、読みやすさ、変更しやすさに関わる内容をまとめます。

## ページ一覧

- [クリーンアーキテクチャ](/isikoro-note/knowledge/tech/architecture/clean-architecture/)
- [レイヤードアーキテクチャ](/isikoro-note/knowledge/tech/architecture/layered-architecture/)
- [MVC](/isikoro-note/knowledge/tech/architecture/mvc/)
- [リーダブルコード](/isikoro-note/knowledge/tech/architecture/readable-code/)
- [AI駆動開発](/isikoro-note/knowledge/tech/development/ai-driven-development/)

## 近いが別カテゴリのもの

次のページは設計に関係しますが、個別の技術用語として扱います。

- [冪等性](/isikoro-note/knowledge/tech/architecture/idempotency/)
- [リトライ](/isikoro-note/knowledge/tech/architecture/retry/)
- [タイムアウト](/isikoro-note/knowledge/tech/architecture/timeout/)

## 見るときの観点

- どこに何を書くべきか
- 依存関係が一方向に整理されているか
- 変更時に影響範囲を追いやすいか
- 読み手が処理の流れを理解しやすいか
- AIにコードを書かせるときに、判断軸を説明できるか
