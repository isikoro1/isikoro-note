---
title: "金融ドメイン"
summary: "お金、決済、与信、請求、入金、精算など、金融系システムで扱う業務領域の総称。"
category: "Work"
type: "guide"
status: "draft"
updated: "2026-07-10"
importance: "high"
keywords:
  - 決済
  - 与信
  - オーソリ
  - 売上確定
  - 精算
  - 請求
  - 入金
  - 取消
  - 返品
  - チャージバック
  - 監査ログ
  - 状態遷移
tags: ["金融", "決済", "業務知識", "Domain"]
aliases: ["金融システム", "金融業務", "FinTech", "決済ドメイン"]
related:
  - title: "クレジットカードシステム"
    slug: "work/finance/credit-card-system"
  - title: "オーソリ"
    slug: "work/finance/authorization"
  - title: "売上確定"
    slug: "work/finance/capture"
  - title: "精算"
    slug: "work/finance/settlement"
  - title: "Transaction"
    slug: "tech/database/transaction"
---

## 概要

金融ドメインは、お金の移動、支払い、請求、入金、与信、精算、残高、手数料などを扱う業務領域です。
システムとしては、正確性、監査性、整合性、障害時の復旧が重要になります。

金融系の開発では、単に画面やAPIを作るだけではなく、業務上の意味を理解する必要があります。
たとえば「決済成功」と見えても、実際にはオーソリ、売上確定、精算、入金など複数の状態が関係します。

## 内容

金融ドメインでは、実装力だけでなく、状態遷移、トランザクション、整合性、例外処理の理解が重要です。
仕様書を読むときは、項目名だけでなく、その状態が業務上何を意味するかを確認します。

主な観点は次の通りです。

- お金の状態がいつ変わるか
- どの時点で取引が確定するか
- 失敗時にどこまで戻すか
- 二重処理をどう防ぐか
- 監査ログをどう残すか
- 外部システム連携で遅延や失敗が起きたときどう扱うか

## 下位項目

- [クレジットカードシステム](/isikoro-note/knowledge/work/finance/credit-card-system/)
- [オーソリ](/isikoro-note/knowledge/work/finance/authorization/)
- [売上確定](/isikoro-note/knowledge/work/finance/capture/)
- [精算](/isikoro-note/knowledge/work/finance/settlement/)

## 関連する概念

- トランザクション
- 状態遷移
- 監査ログ
- 外部システム連携
