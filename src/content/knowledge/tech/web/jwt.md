---
title: "JWT"
summary: "JSON形式の情報を署名付きトークンとして扱う仕組み。認証・認可の文脈でよく出る。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-10"
tags: ["Web", "Auth", "Security"]
aliases: ["JSON Web Token", "トークン認証", "認証トークン"]
related:
  - title: "Session"
    slug: "tech/web/session"
  - title: "Cookie"
    slug: "tech/web/cookie"
---

## 概要

JWT は JSON Web Token の略です。
ユーザーIDなどの情報を JSON 形式で持ち、それに署名を付けて改ざんを検知できるようにしたトークンです。

## 内容

ログイン後の認証状態を扱う文脈でよく出てきます。
API、SPA、モバイルアプリ、バックエンド間通信などで使われることがあります。

## 注意点

JWT を使えば常に安全、というわけではありません。
保存場所、期限、更新方法、失効方法を合わせて考える必要があります。
localStorage に保存すると、XSS 発生時に盗まれるリスクがあります。
