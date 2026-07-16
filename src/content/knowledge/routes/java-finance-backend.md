---
title: "Java金融バックエンド学習ルート"
summary: "Java、EJB、Struts、トランザクション、金融ドメインをつなげて理解するための入口ページ。"
category: "Thinking"
type: "guide"
status: "draft"
updated: "2026-07-17"
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

## 概要

Java金融バックエンドを読むための入口ページです。
技術だけでなく、業務ドメイン、状態遷移、トランザクション、外部連携をセットで理解します。

## 内容

まず読むページは次の通りです。

1. [Java](/isikoro-note/knowledge/tech/java/java/)
2. [Java EE](/isikoro-note/knowledge/tech/java/java-ee/)
3. [Servlet](/isikoro-note/knowledge/tech/java/servlet/)
4. [JSP](/isikoro-note/knowledge/tech/java/jsp/)
5. [Struts](/isikoro-note/knowledge/tech/java/struts/)
6. [EJB](/isikoro-note/knowledge/tech/java/ejb/)
7. [Transaction](/isikoro-note/knowledge/tech/database/transaction/)
8. [金融ドメイン](/isikoro-note/knowledge/work/finance/financial-domain/)
9. [クレジットカードシステム](/isikoro-note/knowledge/work/finance/credit-card-system/)
10. [オーソリ](/isikoro-note/knowledge/work/finance/authorization/)
11. [売上確定](/isikoro-note/knowledge/work/finance/capture/)
12. [精算](/isikoro-note/knowledge/work/finance/settlement/)

## 技術の流れ

画面やリクエストの入口では Struts、Servlet、JSP が出てきます。
裏側の業務処理では EJB や Service 層が出てきます。
DB更新では Transaction が重要になります。

## 業務の流れ

カード決済では、支払いという一つの操作に見えても、内部ではオーソリ、売上確定、精算、請求などに分かれます。
どの処理がどの状態を作るのかを理解する必要があります。
