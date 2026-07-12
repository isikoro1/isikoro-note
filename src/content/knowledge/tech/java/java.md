---
title: "Java"
summary: "業務システム、Webアプリケーション、金融系システムで広く使われる静的型付けのプログラミング言語。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-10"
importance: "high"
keywords:
  - オブジェクト指向
  - class
  - interface
  - 継承
  - ポリモーフィズム
  - 例外処理
  - JVM
  - コンパイル
  - Servlet
  - Spring Boot
tags: ["Java", "Backend", "Enterprise"]
aliases: ["Java SE", "Java言語", "ジャバ"]
related:
  - title: "Servlet"
    slug: "tech/java/servlet"
  - title: "Struts"
    slug: "tech/java/struts"
  - title: "EJB"
    slug: "tech/java/ejb"
  - title: "Transaction"
    slug: "tech/database/transaction"
---

## 概要

Java は、業務システムやWebアプリケーションで広く使われるプログラミング言語です。
静的型付け、オブジェクト指向、豊富なライブラリ、長期運用しやすいエコシステムが特徴です。

## 内容

企業の基幹システム、金融システム、決済システム、Web API、バッチ処理などで使われます。
新しい開発では Spring Boot がよく使われますが、長く運用されているシステムでは Struts、EJB、JSP、Servlet なども出てきます。

業務システムでJavaコードを読むときは、次の観点が重要です。

- どのクラスが画面・APIの入口か
- 業務ロジックがどこにあるか
- DB更新時のトランザクション境界はどこか
- 例外発生時にロールバックされるか
- テストしやすい構造になっているか
