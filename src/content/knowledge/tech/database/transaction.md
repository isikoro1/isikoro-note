---
title: "Transaction"
summary: "複数のDB操作をひとまとまりとして扱い、成功時は確定、失敗時は取り消すための考え方。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-10"
tags: ["Database", "SQL", "Java", "金融"]
aliases: ["トランザクション", "DBトランザクション", "ACID"]
related:
  - title: "EJB"
    slug: "tech/java/ejb"
  - title: "金融ドメイン"
    slug: "work/finance/financial-domain"
  - title: "オーソリ"
    slug: "work/finance/authorization"
---

## ざっくり

Transaction は、複数の処理をひとまとまりとして扱う考え方です。
DB更新では、すべて成功したらコミットし、途中で失敗したらロールバックします。

## 何に使う？

入金、決済、在庫更新、残高更新など、途中で失敗するとデータの整合性が崩れる処理で重要です。
金融系では特に、二重更新や中途半端な状態を避けるために必須の考え方です。

## 最低限の理解

- commit: 処理を確定する
- rollback: 処理を取り消す
- ACID: 原子性、一貫性、独立性、永続性
- 境界: どこからどこまでを1つの処理として扱うか

## Javaで見る観点

Javaの業務システムでは、EJBやSpringなどのコンテナがトランザクション境界を管理することがあります。
コードを読むときは、どのメソッド単位でコミット・ロールバックされるかを見る。

## 自分用メモ

金融系で一番重要なのは、コードが動くことより、データの整合性が壊れないこと。
