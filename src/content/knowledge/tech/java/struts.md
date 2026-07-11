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

## 概要

Struts は、Java のWebアプリケーションフレームワークです。
リクエストを Action に渡し、処理結果に応じて JSP などの画面へ遷移します。

## 主な用途

長く運用されている業務システムの画面処理で使われることがあります。
新規開発では Spring MVC や Spring Boot が使われることが多いですが、既存の基幹系・金融系システムでは Struts が残っている場合があります。

## 基本構成

- Action: リクエストを受け取り、処理を呼び出す
- Form: 画面入力値を受け取る
- JSP: 処理結果を表示する
- 設定ファイル: URL、Action、遷移先JSPの対応関係を定義する

## 読むときの観点

まずは URL、Action、遷移先JSP の対応関係を確認します。
細かい設定より、リクエストから画面表示までの流れを把握することが重要です。
