---
title: "Java EE"
summary: "企業向けJavaアプリケーションを作るための仕様群。Servlet、JSP、EJB、JPAなどの土台になる。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-10"
tags: ["Java", "Java EE", "Enterprise"]
aliases: ["Jakarta EE", "J2EE", "Java Platform Enterprise Edition"]
related:
  - title: "Java"
    slug: "tech/java/java"
  - title: "Servlet"
    slug: "tech/java/servlet"
  - title: "JSP"
    slug: "tech/java/jsp"
  - title: "EJB"
    slug: "tech/java/ejb"
---

## 概要

Java EE は、企業向けのJavaアプリケーションを作るための仕様群です。
Servlet、JSP、EJB、JPA、JMSなど、サーバーサイドJavaで使う技術が含まれます。

## 内容

Webアプリケーション、業務システム、金融システム、基幹システムなどで使われてきました。
現在は Jakarta EE という名称に移っていますが、既存システムや現場では Java EE / J2EE という呼び方も残っています。

読むときの観点は次の通りです。

- 画面やHTTPの入口: Servlet / JSP / Struts
- 業務ロジック: EJB / Service層
- 永続化: JPA / JDBC / SQL
- トランザクション: コンテナ管理または明示的な制御
