---
title: "Cookie"
summary: "ブラウザに小さな情報を保存し、HTTPリクエストに含めて送れる仕組み。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-11"
tags: ["Web", "HTTP", "Auth"]
aliases: ["クッキー", "HTTP Cookie"]
related:
  - title: "Session"
    slug: "tech/web/session"
  - title: "JWT"
    slug: "tech/web/jwt"
---

## 概要

Cookie は、ブラウザに小さな情報を保存し、HTTP リクエストに含めて送れる仕組みです。サーバーはレスポンスヘッダーで Cookie を設定し、ブラウザは条件に合うリクエストで Cookie を送信します。

## 内容

Cookie は、ログイン状態の識別、セッション管理、ユーザー設定の保存、アクセス解析などに使われます。認証では、Session ID やトークンの保存先として登場することがあります。

Cookie には有効期限、送信先のドメイン、パス、HTTPS限定送信、JavaScriptからの参照制限などを指定できます。代表的な属性には `Expires`、`Max-Age`、`Domain`、`Path`、`Secure`、`HttpOnly`、`SameSite` があります。

## 注意点

認証情報を扱う Cookie では、盗難や意図しない送信を避けるために属性設定が重要です。特に `HttpOnly`、`Secure`、`SameSite` は、XSS や CSRF などのセキュリティ上の論点と関係します。

## 脚注

なし。

## 参考文献

なし。
