---
title: "DB制約"
summary: "データベース自身にデータの正当性を保証させるための制約。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Database", "Design", "SQL"]
aliases: ["Database Constraint", "データベース制約"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "トランザクション境界"
    slug: "tech/architecture/transaction-boundary"
---

## 概要

DB制約は、アプリケーションの処理だけに頼らず、データベース自身に不正なデータを拒否させる仕組みです。

主な制約には `NOT NULL`、`UNIQUE`、`PRIMARY KEY`、`FOREIGN KEY`、`CHECK` があります。

## 決済での例

- 外部決済IDに `UNIQUE` を付けて重複登録を防ぐ
- 金額を `NOT NULL` かつ正数に制限する
- Paymentのorder_idへ外部キーを設定する
- べき等キーを一意にする

## AI生成コードを見る観点

- アプリケーション側の事前確認だけで重複を防ごうとしていないか
- null不可の項目がDBでも保証されているか
- 外部キー削除時の動作が意図どおりか
- 制約違反を適切な業務エラーへ変換しているか

## 参考文献

- PostgreSQL Documentation: Constraints
