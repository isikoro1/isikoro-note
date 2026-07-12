---
title: "冪等性"
summary: "同じ操作を複数回実行しても、結果が変わらないようにする性質。API、決済、再送処理、二重実行防止で重要になる。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-12"
tags: ["Architecture", "API", "金融", "決済"]
aliases: ["idempotency", "Idempotency", "べき等性", "二重処理防止"]
keywords:
  - idempotency key
  - retry
  - duplicate request
  - 二重送信
  - 二重処理防止
  - 再送
  - API設計
  - 決済
  - 障害復旧
related:
  - title: "Transaction"
    slug: "tech/database/transaction"
  - title: "金融ドメイン"
    slug: "work/finance/financial-domain"
  - title: "オーソリ"
    slug: "work/finance/authorization"
---

## 概要

冪等性は、同じ操作を複数回実行しても、最終的な結果が変わらない性質です。
API、決済、外部システム連携、再送処理などで重要になります。

たとえば通信エラーで同じリクエストをもう一度送ったときに、注文や決済が二重に作られると問題になります。
そのため、同じ処理かどうかを識別し、重複実行を防ぐ設計が必要になります。

## 内容

業務システムでは、処理が一度だけ実行されるとは限りません。
タイムアウト、ネットワークエラー、ブラウザの再送、バッチの再実行、外部APIのリトライなどが起きます。

冪等性を考えるときは、次の観点を確認します。

- 同じリクエストをどう識別するか
- すでに処理済みかどうかをどこで判定するか
- 二重更新をどう防ぐか
- 処理中に失敗した場合、再実行して安全か
- レスポンスだけ失敗した場合、実処理は完了している可能性があるか

## よく出る文脈

- 決済API
- 注文作成
- 入金処理
- バッチ再実行
- 外部システム連携
- メッセージキュー
- リトライ処理

## 脚注

冪等性は、単に「同じ処理を何度も呼べる」という意味ではありません。
同じ入力に対して、業務上の結果が重複しないように設計することが重要です。

## 参考文献

- 各種API設計ドキュメント
- 決済システムの再送・重複処理に関する設計資料

## 外部リンク

- [MDN Web Docs: HTTP request methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
