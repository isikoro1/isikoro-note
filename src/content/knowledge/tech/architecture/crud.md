---
title: "CRUD"
summary: "データの作成、参照、更新、削除という基本的な操作の総称。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "Database", "API"]
aliases: ["Create Read Update Delete"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "Repository"
    slug: "tech/architecture/repository"
  - title: "DTO"
    slug: "tech/architecture/dto"
---

## 概要

CRUDは、Create、Read、Update、Deleteの頭文字で、データを扱う基本操作を表します。

## AIに任せやすい理由

一覧、詳細、登録、更新、削除の処理は構造が定型化しやすく、フレームワークの規約に沿って生成しやすいためです。

## 注意点

実際の業務処理をすべてCRUDとして扱うと、状態遷移や権限、監査、同時更新などの意味が失われます。決済の `capture` や `refund` は単なるstatus更新ではなく、業務上の操作として表現した方が安全です。

## AI生成コードを見る観点

- 更新APIが任意の項目を上書きできないか
- 認可確認が抜けていないか
- 削除が物理削除でよいか
- 楽観ロックや同時更新を考慮しているか
- 一覧取得にページングがあるか

## 参考文献

- Martin Fowler: Patterns of Enterprise Application Architecture
