---
title: "Cookie"
summary: "ブラウザに小さな情報を保存し、HTTPリクエストに含めて送れる仕組み。"
category: "Tech"
type: "term"
status: "stub"
updated: "2026-07-10"
tags: ["Web", "HTTP", "Auth"]
aliases: ["クッキー", "HTTP Cookie"]
related:
  - title: "Session"
    slug: "tech/web/session"
  - title: "JWT"
    slug: "tech/web/jwt"
---

## ざっくり

Cookie は、ブラウザに小さな情報を保存し、HTTP リクエストに含めて送れる仕組みです。

## 何に使う？

ログイン状態の識別、トラッキング、設定保存などに使われます。
認証では Session ID やトークンの保存先として出てくることがあります。

## 自分用メモ

HttpOnly、Secure、SameSite などの属性が重要。認証とセキュリティの話でよく出る。
