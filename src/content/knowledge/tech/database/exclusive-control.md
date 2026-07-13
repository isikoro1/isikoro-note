---
title: "排他制御"
summary: "複数の処理が同じデータを同時に更新するときに、整合性を壊さないように制御する考え方。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-13"
tags: ["Database", "Transaction", "Concurrency", "金融"]
aliases: ["exclusive control", "排他", "同時実行制御", "concurrency control"]
keywords:
  - lock
  - deadlock
  - transaction
  - isolation level
  - 楽観ロック
  - 悲観ロック
  - 二重更新
  - 整合性
related:
  - title: "Transaction"
    slug: "tech/database/transaction"
  - title: "Deadlock"
    slug: "tech/database/deadlock"
  - title: "Isolation Level"
    slug: "tech/database/isolation-level"
  - title: "金融ドメイン"
    slug: "work/finance/financial-domain"
---

## 概要

排他制御は、複数の処理が同じデータを同時に扱うときに、データの整合性を壊さないようにするための考え方です。
DB更新、在庫更新、残高更新、決済処理などで重要になります。

## 内容

業務システムでは、同じレコードを複数の利用者や処理が同時に更新することがあります。
排他制御が不十分だと、更新の上書き、二重処理、残高不整合などが発生します。

主な方式は次の通りです。

- 楽観ロック: 更新時にバージョン番号などを確認し、競合していたら失敗させる
- 悲観ロック: 先にロックを取り、他の処理が更新できないようにする
- DBの分離レベル: トランザクション中に他の処理からどう見えるかを制御する

## 見るときの観点

- どのデータを同時更新から守る必要があるか
- ロックを取る範囲が広すぎないか
- デッドロックが起きやすい順序になっていないか
- 失敗時にリトライするのか、エラーにするのか
- 金額・残高・状態変更など、業務上戻せない値をどう守るか
