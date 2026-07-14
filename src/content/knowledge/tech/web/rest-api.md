---
title: "REST API"
summary: "HTTPを使ってリソースを操作するAPI設計の考え方。Web API、バックエンド開発、外部連携でよく使う。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-14"
tags: ["Web", "API", "HTTP", "Backend"]
aliases: ["REST", "RESTful API", "Web API", "API設計"]
keywords:
  - HTTPメソッド
  - GET
  - POST
  - PUT
  - PATCH
  - DELETE
  - status code
  - endpoint
  - resource
  - request
  - response
  - JSON
  - idempotency
  - 認証
  - 認可
related:
  - title: "冪等性"
    slug: "tech/architecture/idempotency"
  - title: "JWT"
    slug: "tech/web/jwt"
  - title: "Session"
    slug: "tech/web/session"
  - title: "TCP/IP"
    slug: "tech/network/tcp-ip"
  - title: "OSI参照モデル"
    slug: "tech/network/osi-reference-model"
---

## 概要

REST APIは、HTTPを使ってリソースを操作するAPI設計の考え方です。
Webアプリケーション、スマホアプリ、外部システム連携、バックエンドAPIでよく使われます。

## 内容

REST APIでは、URLで対象となるリソースを表し、HTTPメソッドで操作を表します。

- GET: 取得する
- POST: 新規作成や処理実行を行う
- PUT: 全体を更新する
- PATCH: 一部を更新する
- DELETE: 削除する

レスポンスでは、HTTPステータスコードとJSONなどのデータを返します。

## 見るときの観点

APIを読むときは、まず次を確認します。

- どのURLがどのリソースを表しているか
- HTTPメソッドが操作内容と合っているか
- 正常時と異常時のステータスコード
- 認証・認可がどこで行われるか
- 同じリクエストが再送されたときに安全か
- エラー時のレスポンス形式が揃っているか

金融や決済のAPIでは、再送、二重処理、タイムアウト、冪等性が特に重要になります。

## 関連する概念

- HTTP
- JSON
- ステータスコード
- 認証
- 認可
- JWT
- 冪等性
- タイムアウト
- リトライ

## 参考文献

- MDN Web Docs: HTTP
