---
title: "セキュリティ"
summary: "システムやデータを、不正アクセス、漏えい、改ざん、停止から守るための考え方。"
category: "Tech"
type: "security"
status: "draft"
created: "2026-07-19"
updated: "2026-07-19"
tags: ["Security", "Web", "Authentication", "Authorization"]
aliases: ["情報セキュリティ", "Webセキュリティ", "セキュリティ対策"]
keywords:
  - security
  - authentication
  - authorization
  - vulnerability
  - XSS
  - CSRF
  - SQL injection
history:
  - date: "2026-07-19"
    text: "初版作成"
related:
  - title: "Cookie"
    slug: "tech/web/cookie"
  - title: "Session"
    slug: "tech/web/session"
  - title: "JWT"
    slug: "tech/web/jwt"
---

## 概要

セキュリティは、システムやデータを不正アクセス、情報漏えい、改ざん、停止などから守るための考え方です。

Webアプリでは、ログイン、認可、入力値検証、通信、データ保存、権限管理など、多くの箇所に関係します。

## 内容

セキュリティは、特定の機能を後から足せば終わるものではありません。
設計、実装、テスト、運用のすべてに関わります。

特にWebアプリでは、次のような観点が重要です。

- 認証
- 認可
- 入力値検証
- セッション管理
- 秘密情報の管理
- ログの扱い
- 脆弱性への対応

## よく出てくる項目

- XSS
- CSRF
- SQLインジェクション
- パスワード管理
- アクセス制御
- HTTPS
- Cookie の属性
- トークン管理

## 注意

セキュリティは、分かったつもりになりやすい領域です。
実装時は、フレームワークの標準機能を使い、独自実装を増やしすぎないことが重要です。

## 関連する概念

- Cookie
- Session
- JWT
- 認証
- 認可
- 脆弱性
