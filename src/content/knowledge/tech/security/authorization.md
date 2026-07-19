---
title: "認可"
summary: "認証済みの利用者が、どの操作やデータにアクセスできるかを判断する仕組み。"
category: "Tech"
type: "security-term"
status: "draft"
created: "2026-07-19"
updated: "2026-07-19"
tags: ["Security", "Authorization", "Access Control"]
aliases: ["Authorization", "権限管理", "アクセス制御"]
keywords:
  - authorization
  - access control
  - role
  - permission
  - privilege
history:
  - date: "2026-07-19"
    text: "初版作成"
related:
  - title: "セキュリティ"
    slug: "tech/security/security"
  - title: "認証"
    slug: "tech/security/authentication"
---

## 概要

認可は、認証済みの利用者が、どの操作やデータにアクセスできるかを判断する仕組みです。

ログインしているユーザーでも、管理者だけが見られる画面、本人だけが更新できるデータ、特定ロールだけが実行できる操作があります。

## 認証との違い

認証は「誰か」を確認する処理です。
認可は「その人が何をしてよいか」を判断する処理です。

ログイン済みだからといって、すべてのデータを見てよいわけではありません。

## よくある考え方

- ロールで制御する
- 権限で制御する
- 所有者かどうかで制御する
- 組織やテナント単位で制御する

## 実装で見る観点

- 画面だけでなくAPI側でも権限チェックしているか
- URLやIDを変更しただけで他人のデータを見られないか
- 管理者権限の扱いが広すぎないか
- 権限変更が即時反映されるべきか
- ロールと権限の関係が複雑になりすぎていないか

## 関連する概念

- 認証
- アクセス制御
- ロール
- 権限
- IDOR
