---
title: "Java金融バックエンド学習ルート"
summary: "Java、EJB、Struts、トランザクション、金融ドメインをつなげて理解するための入口ページ。"
category: "Thinking"
type: "guide"
status: "draft"
updated: "2026-07-10"
tags: ["Java", "金融", "バックエンド", "学習ルート"]
aliases: ["金融Java", "Java金融", "業務Java学習"]
related:
  - title: "Java"
    slug: "tech/java/java"
  - title: "Struts"
    slug: "tech/java/struts"
  - title: "EJB"
    slug: "tech/java/ejb"
  - title: "金融ドメイン"
    slug: "work/finance/financial-domain"
  - title: "クレジットカードシステム"
    slug: "work/finance/credit-card-system"
---

## ざっくり

Java金融バックエンドを読むための入口ページ。
技術だけでなく、業務ドメイン、状態遷移、トランザクション、外部連携をセットで理解する。

## まず読むページ

1. Java
2. Java EE
3. Servlet
4. JSP
5. Struts
6. EJB
7. Transaction
8. 金融ドメイン
9. クレジットカードシステム
10. オーソリ
11. 売上確定
12. 精算

## 技術の流れ

画面やリクエストの入口では Struts、Servlet、JSP が出てくる。
裏側の業務処理では EJB や Service 層が出てくる。
DB更新では Transaction が重要になる。

## 業務の流れ

カード決済では、支払いという一つの操作に見えても、内部ではオーソリ、売上確定、精算、請求などに分かれる。
どの処理がどの状態を作るのかを理解する必要がある。

## 自分用メモ

このルートは、今後の業務理解・面接対策・技術ブログ素材の土台にする。
