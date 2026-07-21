---
title: "例外処理の方針"
summary: "失敗をどの層で検出し、どの形式へ変換し、記録・再試行・通知するかを定める方針。"
category: "Tech"
type: "guide"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "Error Handling", "Design"]
aliases: ["Exception Handling Policy", "エラーハンドリング方針"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "インターフェース"
    slug: "tech/architecture/interface"
  - title: "トランザクション境界"
    slug: "tech/architecture/transaction-boundary"
---

## 概要

例外処理の方針は、エラーが起きた箇所ごとに場当たり的に `try-catch` を置くのではなく、失敗の分類と扱いをシステム全体で決めるものです。

## 分類例

- 入力エラー: 利用者へ修正可能な内容を返す
- 業務エラー: 許可されない状態遷移などを表す
- 外部サービス障害: タイムアウト、再試行、保留状態を検討する
- システム障害: ログと監視へ記録し、内部情報を利用者へ漏らさない

## 決済での観点

外部APIがタイムアウトしても、決済が失敗したとは限りません。結果不明として照会やWebhookを待つ必要があります。例外をすべて同じ失敗状態へ変換しないことが重要です。

## AI生成コードを見る観点

- `catch (Exception)` で握りつぶしていないか
- 例外発生後も処理を続けていないか
- ログへカード情報や秘密情報を出していないか
- 再試行してよい例外と、してはいけない例外を区別しているか
- APIレスポンスへスタックトレースを返していないか

## 参考文献

- Spring Framework Documentation: Error Responses
