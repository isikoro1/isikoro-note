---
title: "Session"
summary: "サーバー側でユーザーごとの状態を保持する仕組み。"
category: "Tech"
type: "term"
status: "stub"
updated: "2026-07-31"
tags: ["Web", "Auth"]
aliases: ["セッション", "Session ID"]
history:
  - date: "2026-07-31"
    text: "認証機能の実装ガイドへの導線を追加"
related:
  - title: "Webアプリの認証機能を実装する"
    slug: "tech/security/authentication-implementation"
  - title: "Cookie"
    slug: "tech/web/cookie"
  - title: "JWT"
    slug: "tech/web/jwt"
---

## 概要

Session は、サーバー側でユーザーごとの状態を保持する仕組みです。
ブラウザには Session ID を持たせ、サーバー側の状態とひもづけます。

## 内容

ログイン状態、カート情報、一時的な入力情報などを扱うときに使われます。
JWT と比較されることがありますが、主な違いは認証状態をどこに持つかです。

ログイン時の発行、Cookie属性、有効期限、ログアウト時の失効は、[Webアプリの認証機能を実装する](/isikoro-note/knowledge/tech/security/authentication-implementation/)で整理しています。
