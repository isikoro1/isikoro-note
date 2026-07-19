---
title: "認証"
summary: "利用者が本人であることを確認する仕組み。ログイン、パスワード、二要素認証などに関係する。"
category: "Tech"
type: "security-term"
status: "draft"
created: "2026-07-19"
updated: "2026-07-19"
tags: ["Security", "Authentication", "Login"]
aliases: ["Authentication", "ログイン", "本人確認"]
keywords:
  - authentication
  - login
  - password
  - MFA
  - session
history:
  - date: "2026-07-19"
    text: "初版作成"
related:
  - title: "セキュリティ"
    slug: "tech/security/security"
  - title: "認可"
    slug: "tech/security/authorization"
  - title: "Session"
    slug: "tech/web/session"
---

## 概要

認証は、利用者が本人であることを確認する仕組みです。

Webアプリでは、IDとパスワードでログインする処理、メール認証、二要素認証、外部IDプロバイダによるログインなどが認証にあたります。

## 認証で確認すること

認証で確認するのは、主に「あなたは誰か」です。

例えば、ユーザーIDとパスワードが正しいか、認証コードを入力できるか、正しい外部アカウントでログインしているかを確認します。

## 認可との違い

認証は「誰か」を確認する処理です。
認可は「その人が何をしてよいか」を判断する処理です。

ログインできることと、管理画面にアクセスできることは別の問題です。

## 実装で見る観点

- パスワードを平文で保存していないか
- ログイン失敗時の扱いが安全か
- セッションやトークンを安全に扱っているか
- 二要素認証が必要な場面か
- 認証後の画面で認可チェックを忘れていないか

## 関連する概念

- 認可
- Session
- Cookie
- JWT
- パスワードハッシュ
- 二要素認証
