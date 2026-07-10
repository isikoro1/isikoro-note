---
title: "EJB"
summary: "Java EEで業務ロジックやトランザクション管理を扱うために使われてきたサーバーサイドコンポーネント技術。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-10"
tags: ["Java", "Java EE", "Enterprise", "Legacy"]
aliases: ["Enterprise JavaBeans", "Enterprise Java Beans", "EJBコンテナ"]
related:
  - title: "Java"
    slug: "tech/java/java"
  - title: "Java EE"
    slug: "tech/java/java-ee"
  - title: "Transaction"
    slug: "tech/database/transaction"
  - title: "Struts"
    slug: "tech/java/struts"
---

## ざっくり

EJB は Enterprise JavaBeans の略です。
Java EE の中で、業務ロジック、トランザクション、セキュリティ、非同期処理などをコンテナに管理させるための仕組みです。

## 何に使う？

企業向けの大規模Javaシステムで、業務処理を部品化するために使われてきました。
現代の新規開発では Spring 系の技術に置き換わっていることも多いですが、長期運用されている業務システムでは今も出てくる可能性があります。

## 最低限の理解

- EJB はコンテナに管理される部品
- 業務ロジックを持つ Session Bean が重要
- DB更新ではトランザクション管理と関係する
- 画面側の Struts / JSP とは別に、裏側の業務処理を担当することがある

## よく出る種類

- Session Bean: 業務処理を担当する
- Message-Driven Bean: メッセージを受け取って非同期処理する
- Entity Bean: 古い永続化の仕組み。現代ではJPAに置き換わることが多い

## 自分用メモ

EJBは細かい仕様を最初から暗記するより、「コンテナ管理」「業務ロジック」「トランザクション」の3点で読む。
