---
title: "Deadlock"
summary: "複数の処理が互いにロックの解放を待ち続け、処理が進まなくなる状態。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-13"
tags: ["Database", "SQL", "Transaction", "Java", "金融"]
aliases: ["デッドロック", "dead lock", "ロック競合"]
keywords:
  - lock
  - transaction
  - rollback
  - isolation level
  - 排他制御
  - 楽観ロック
  - 悲観ロック
  - タイムアウト
  - 再試行
  - 二重更新
related:
  - title: "Transaction"
    slug: "tech/database/transaction"
  - title: "コネクションプール"
    slug: "tech/database/connection-pool"
  - title: "冪等性"
    slug: "tech/architecture/idempotency"
  - title: "金融ドメイン"
    slug: "work/finance/financial-domain"
---

## 概要

Deadlock は、複数の処理が互いに相手の持っているロックを待ち続け、処理が進まなくなる状態です。
日本語ではデッドロックと呼びます。

DB更新を伴う業務システムでは、トランザクション、排他制御、更新順序と関係します。
金融系では、決済、入金、残高更新、売上確定など、同じデータを複数処理が触る場面で注意が必要です。

## 内容

典型例は、2つのトランザクションが異なる順序で同じリソースを更新する場合です。

```text
Transaction A: 注文テーブルをロック → 在庫テーブルを待つ
Transaction B: 在庫テーブルをロック → 注文テーブルを待つ
```

この状態になると、A は B のロック解放を待ち、B は A のロック解放を待つため、どちらも進めません。
DBは通常、デッドロックを検知すると片方のトランザクションを失敗させ、ロールバックします。

## 見るときの観点

デッドロックを調べるときは、次の観点を見ると整理しやすいです。

- どのテーブル・行をロックしているか
- 複数処理で更新順序がそろっているか
- トランザクションが長すぎないか
- 不要に広い範囲をロックしていないか
- エラー時に再試行できる設計になっているか
- 同じ処理が二重に実行されても壊れないか

## 関連する概念

- lock
- transaction
- isolation level
- rollback
- retry
- timeout
- idempotency

## 参考文献

- 使用しているDB製品のロック、トランザクション、デッドロック検知に関する公式ドキュメントを確認する。
