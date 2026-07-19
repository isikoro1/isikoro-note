---
title: "SQLインジェクション"
summary: "入力値を通じて不正なSQLを実行され、データの漏えい・改ざんにつながる脆弱性。"
category: "Tech"
type: "security-term"
status: "draft"
created: "2026-07-19"
updated: "2026-07-19"
tags: ["Security", "SQL", "Database"]
aliases: ["SQL Injection", "SQLi"]
keywords:
  - SQL injection
  - SQLi
  - prepared statement
  - bind parameter
  - database
history:
  - date: "2026-07-19"
    text: "初版作成"
related:
  - title: "セキュリティ"
    slug: "tech/security/security"
  - title: "DBインデックス"
    slug: "tech/database/db-index"
---

## 概要

SQLインジェクションは、入力値を通じて不正なSQLを実行され、データの漏えい、改ざん、削除につながる脆弱性です。

ログインフォーム、検索フォーム、ID指定の詳細画面など、入力値を使ってSQLを組み立てる場所で問題になりやすいです。

## 何が起きるか

文字列連結でSQLを作ると、入力値の中にSQLの一部として解釈される文字列を混ぜ込まれる可能性があります。

その結果、想定していない条件でデータを取得されたり、更新されたりする危険があります。

## 実装で見る観点

- 入力値を文字列連結でSQLに埋め込んでいないか
- プレースホルダやバインド変数を使っているか
- ORMやクエリビルダの使い方が安全か
- 動的にカラム名やORDER BYを組み立てる箇所がないか
- DBユーザーの権限が広すぎないか

## 対策の方向性

基本は、プリペアドステートメントやバインド変数を使い、入力値をSQL構文として解釈させないことです。

また、入力値検証、最小権限、エラーメッセージの扱いも合わせて確認します。

## 関連する概念

- プリペアドステートメント
- バインド変数
- ORM
- 入力値検証
- 最小権限
