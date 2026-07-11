---
title: "Session"
summary: "サーバー側でユーザーごとの状態を保持する仕組み。"
category: "Tech"
type: "term"
status: "stub"
updated: "2026-07-10"
tags: ["Web", "Auth"]
aliases: ["セッション", "Session ID"]
related:
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
