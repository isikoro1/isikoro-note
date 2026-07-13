---
title: "DB Index"
summary: "DBで検索や結合を速くするために使う補助的なデータ構造。性能改善や実行計画の文脈で重要になる。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-13"
tags: ["Database", "SQL", "Performance"]
aliases: ["インデックス", "DBインデックス", "索引", "Index"]
keywords:
  - SQL
  - WHERE
  - JOIN
  - ORDER BY
  - execution plan
  - cardinality
  - B-tree
  - slow query
  - N+1
related:
  - title: "N+1問題"
    slug: "tech/database/n-plus-one"
  - title: "Transaction"
    slug: "tech/database/transaction"
  - title: "コネクションプール"
    slug: "tech/database/connection-pool"
---

## 概要

DB Index は、DBで検索や結合を速くするための補助的なデータ構造です。
日本語ではインデックス、索引と呼ばれます。

## 内容

インデックスがない列を条件にして大量データを検索すると、DBは多くの行を確認する必要があります。
インデックスが適切に使われると、目的の行にたどり着きやすくなります。

ただし、インデックスを増やせば常に速くなるわけではありません。
更新時のコストが増えたり、DBが期待通りのインデックスを使わない場合もあります。

## 見るときの観点

- WHERE句やJOIN条件に使われる列か
- ORDER BYやGROUP BYで使われる列か
- 件数が多いテーブルか
- カーディナリティが低すぎないか
- 実行計画でインデックスが使われているか
- 更新頻度が高いテーブルで過剰に貼っていないか

## 関連する確認方法

- SQLログを見る
- 実行計画を見る
- slow query を確認する
- 本番相当のデータ量で確認する
