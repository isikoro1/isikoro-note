---
title: "N+1問題"
summary: "一覧取得などで、1回で済むはずのDBアクセスが件数分だけ繰り返され、性能劣化を起こす問題。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-13"
tags: ["Database", "SQL", "Performance", "Backend"]
aliases: ["N+1", "N+1 query", "N+1クエリ", "N+1問題"]
keywords:
  - SQL
  - ORM
  - JOIN
  - eager loading
  - lazy loading
  - query count
  - performance
  - index
  - API
related:
  - title: "Index"
    slug: "tech/database/db-index"
  - title: "コネクションプール"
    slug: "tech/database/connection-pool"
  - title: "Java"
    slug: "tech/java/java"
---

## 概要

N+1問題は、一覧取得などで最初に1回問い合わせた後、各行ごとに追加の問い合わせが発生してしまう問題です。
データ件数が増えるほどSQLの回数が増え、性能劣化につながります。

## 内容

たとえば注文一覧を取得したあと、注文ごとにユーザー情報を個別取得すると、注文数が100件なら追加で100回SQLが実行されます。
このように、1回の一覧取得とN回の追加取得が発生するため N+1 問題と呼ばれます。

## 見るときの観点

- 画面やAPIの1リクエストでSQLが何回実行されているか
- ループの中でDBアクセスしていないか
- JOINや一括取得でまとめられないか
- ORMの lazy loading が意図せず動いていないか
- 件数が増えたときに応答時間が急に悪化しないか

## 対策の方向

- JOINで必要なデータをまとめて取得する
- IN句などで関連データを一括取得する
- ORMの eager loading を使う
- SQLログやAPMでクエリ回数を確認する
