---
title: "重要なテスト"
summary: "システムの主要な業務ルール、境界条件、障害時の振る舞いを保証する優先度の高いテスト。"
category: "Tech"
type: "guide"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Testing", "Design", "Quality"]
aliases: ["Critical Tests", "重要テスト"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "状態遷移"
    slug: "tech/architecture/state-transition"
  - title: "トランザクション境界"
    slug: "tech/architecture/transaction-boundary"
---

## 概要

重要なテストは、コード量を網羅することより、壊れた場合の影響が大きい業務ルールや境界を優先して検証するテストです。

## 決済で優先する例

- 同じ決済要求を再送しても二重請求されない
- オーソリ前に売上確定できない
- Webhookを重複受信しても状態が壊れない
- 外部API成功後にDB更新が失敗しても復旧できる
- 返金総額が売上額を超えない
- 権限のない利用者が返金できない

## テストの種類

- ドメインルールの単体テスト
- DB制約とトランザクションの統合テスト
- 外部APIとの契約テスト
- APIを通した主要フローのE2Eテスト
- 障害注入やタイムアウトのテスト

## AI生成コードを見る観点

正常系のテストだけで安心せず、重複、競合、境界値、部分失敗、再試行を確認します。テストが実装の詳細だけをなぞり、業務上の保証になっていない場合にも注意します。

## 参考文献

- Kent Beck: Test-Driven Development
