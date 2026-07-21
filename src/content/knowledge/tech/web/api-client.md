---
title: "APIクライアント"
summary: "外部または内部のHTTP APIを呼び出し、通信処理をアプリケーションから分離する部品。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["API", "HTTP", "Integration"]
aliases: ["API Client", "HTTP Client"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "インターフェース"
    slug: "tech/architecture/interface"
  - title: "例外処理の方針"
    slug: "tech/architecture/exception-handling-policy"
---

## 概要

APIクライアントは、URL、認証ヘッダー、シリアライズ、タイムアウト、レスポンス変換などの通信処理をまとめる部品です。

## AIに任せやすい部分

公式仕様と入出力が明確なら、SDK利用やHTTP呼び出しの雛形は生成しやすい部分です。ただし、タイムアウト、再試行、署名、べき等性は設計確認が必要です。

## AI生成コードを見る観点

- 接続・読み取りタイムアウトが設定されているか
- すべての失敗を同じ例外へ潰していないか
- 秘密鍵やアクセストークンをログへ出していないか
- 再試行によって二重実行されないか
- HTTPステータスだけで業務上の成功を判断していないか
- APIバージョンと仕様が最新か

## 参考文献

- RFC 9110: HTTP Semantics
