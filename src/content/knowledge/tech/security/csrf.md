---
title: "CSRF"
summary: "ログイン済み利用者の権限を利用して、意図しないリクエストを送らせる攻撃。"
category: "Tech"
type: "security-term"
status: "draft"
created: "2026-07-19"
updated: "2026-07-19"
tags: ["Security", "CSRF", "Web"]
aliases: ["クロスサイトリクエストフォージェリ", "Cross Site Request Forgery"]
keywords:
  - CSRF
  - token
  - SameSite
  - Cookie
  - request forgery
history:
  - date: "2026-07-19"
    text: "初版作成"
related:
  - title: "セキュリティ"
    slug: "tech/security/security"
  - title: "Cookie"
    slug: "tech/web/cookie"
---

## 概要

CSRF は、ログイン済み利用者の権限を利用して、本人が意図しないリクエストを送らせる攻撃です。

利用者がログインしたまま悪意あるページを開いたときに、別サイトへのリクエストが送られ、重要な操作が実行される可能性があります。

## 何が問題か

ブラウザは、条件によっては対象サイトの Cookie を自動で送信します。

そのため、攻撃者が直接パスワードを知らなくても、ログイン済み利用者の状態を利用して操作を実行させる可能性があります。

## 実装で見る観点

- 状態を変更する処理に CSRF 対策があるか
- CSRF トークンを検証しているか
- Cookie の SameSite 属性を適切に設定しているか
- GET リクエストで重要な状態変更をしていないか
- API が Cookie 認証なのかトークン認証なのか

## 対策の方向性

状態を変更するリクエストには、推測できないトークンを含めて検証します。

また、Cookie の SameSite 属性やフレームワークの標準機能を利用し、独自実装を増やしすぎないことが重要です。

## 関連する概念

- Cookie
- SameSite
- CSRFトークン
- Session
- 認証
