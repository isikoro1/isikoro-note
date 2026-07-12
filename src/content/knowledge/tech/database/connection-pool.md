---
title: "コネクションプール"
summary: "DB接続を毎回作り直さず、あらかじめ確保した接続を再利用する仕組み。性能、負荷、障害調査で重要になる。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-12"
tags: ["Database", "Java", "Performance", "Backend"]
aliases: ["Connection Pool", "DBコネクションプール", "接続プール"]
keywords:
  - database connection
  - JDBC
  - DataSource
  - max pool size
  - timeout
  - leak
  - connection leak
  - performance
  - DB接続
  - 性能
related:
  - title: "Transaction"
    slug: "tech/database/transaction"
  - title: "Java"
    slug: "tech/java/java"
  - title: "EJB"
    slug: "tech/java/ejb"
---

## 概要

コネクションプールは、DB接続をあらかじめ確保しておき、必要なときに使い回す仕組みです。
DB接続の生成は重い処理なので、リクエストのたびに作成・破棄すると性能が悪くなります。

Javaの業務システムでは、アプリケーションサーバーやフレームワークが `DataSource` を通じてコネクションプールを管理することがあります。

## 内容

Webアプリケーションでは、複数のリクエストが同時にDBへアクセスします。
そのたびに新しい接続を作るのではなく、プールから空いている接続を借り、処理が終わったら返却します。

読むときの観点は次の通りです。

- どこでDB接続を取得しているか
- 取得した接続を返却しているか
- 最大接続数はいくつか
- タイムアウト設定はどうなっているか
- 接続リークが起きる可能性はあるか
- トランザクション境界と接続の寿命がどう関係するか

## よく出る問題

- コネクションリーク
- 最大接続数不足
- DB接続待ちによる性能劣化
- タイムアウト
- トランザクション未終了
- 外部システム遅延による接続占有

## Javaで見る観点

Javaでは、`Connection` を直接扱う場合もありますが、業務システムでは `DataSource`、アプリケーションサーバー、Spring、EJBなどが接続管理を担うことがあります。

古いシステムを読むときは、どこで接続を取得し、どこで閉じているかを確認します。

## 脚注

コネクションプールは性能改善の仕組みですが、設定を誤るとDB側の負荷増加や接続枯渇の原因にもなります。

## 参考文献

- JDBC / DataSource に関する公式ドキュメント
- 使用しているアプリケーションサーバーやフレームワークの設定資料

## 外部リンク

- [Oracle Java Documentation: JDBC Basics](https://docs.oracle.com/javase/tutorial/jdbc/basics/index.html)
