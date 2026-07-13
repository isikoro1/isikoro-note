---
title: "Isolation Level"
summary: "トランザクション同士が同時に動くとき、他の処理から変更中のデータをどこまで見せるかを決める設定。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-13"
tags: ["Database", "SQL", "Transaction"]
aliases: ["分離レベル", "トランザクション分離レベル", "transaction isolation level"]
keywords:
  - READ UNCOMMITTED
  - READ COMMITTED
  - REPEATABLE READ
  - SERIALIZABLE
  - dirty read
  - non-repeatable read
  - phantom read
  - lock
  - deadlock
related:
  - title: "Transaction"
    slug: "tech/database/transaction"
  - title: "Deadlock"
    slug: "tech/database/deadlock"
  - title: "排他制御"
    slug: "tech/database/exclusive-control"
---

## 概要

Isolation Level は、複数のトランザクションが同時に動くときに、変更中のデータを他の処理からどこまで見せるかを決める考え方です。
日本語では分離レベルと呼ばれます。

## 内容

分離レベルを強くすると整合性は保ちやすくなりますが、ロック待ちや性能低下が起きやすくなります。
弱くすると性能は出しやすくなりますが、途中状態の読み取りや読み取り結果のズレが起きることがあります。

代表的な分離レベルは次の通りです。

- READ UNCOMMITTED
- READ COMMITTED
- REPEATABLE READ
- SERIALIZABLE

## 関連する現象

- dirty read: 未確定の変更を読んでしまう
- non-repeatable read: 同じデータを再度読んだときに値が変わる
- phantom read: 条件に一致する行の集合が途中で変わる

## 見るときの観点

- その処理はどの程度の整合性を必要とするか
- ロック待ちやデッドロックの原因になっていないか
- DBのデフォルト分離レベルは何か
- 金額、残高、状態遷移の読み取りで問題が起きないか
