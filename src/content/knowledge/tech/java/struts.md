---
title: "Struts"
summary: "古いJava業務システムで見かけるWebアプリケーションフレームワーク。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-10"
tags: ["Java", "Web", "MVC", "Legacy"]
aliases: ["Apache Struts", "Struts Framework"]
related:
  - title: "Servlet"
    slug: "tech/java/servlet"
  - title: "JSP"
    slug: "tech/java/jsp"
  - title: "MVC"
    slug: "tech/architecture/mvc"
---

## ざっくり

Struts は、Java の古い Web アプリケーションフレームワークです。
リクエストを Action に渡し、処理結果に応じて JSP などの画面へ遷移します。

## 何に使う？

長く運用されている業務システムの画面処理で使われることがあります。
新規開発では Spring MVC や Spring Boot の方が一般的ですが、金融系・基幹系では既存資産として残っている可能性があります。

## 自分用メモ

最初は細かい設定より、リクエストから画面表示までの流れを読めることを優先する。
