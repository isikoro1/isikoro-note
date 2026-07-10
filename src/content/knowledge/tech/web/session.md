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

## ざっくり

Session は、サーバー側でユーザーごとの状態を保持する仕組みです。
ブラウザには Session ID を持たせ、サーバー側の状態とひもづけます。

## 何に使う？

ログイン状態、カート情報、一時的な入力情報などを扱うときに使われます。

## 自分用メモ

JWT と比較されることが多い。どちらが上というより、状態をどこに持つかが違う。
