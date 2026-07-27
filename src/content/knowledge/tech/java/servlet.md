---
title: "Servlet"
summary: "JavaでHTTPリクエストとレスポンスを扱う基本的な仕組み。"
category: "Tech"
type: "term"
status: "stub"
updated: "2026-07-28"
tags: ["Java", "Web", "HTTP"]
aliases: ["Java Servlet", "サーブレット"]
history:
  - date: "2026-07-28"
    text: "Struts 1のリクエスト処理へのリンクを追加"
related:
  - title: "Struts"
    slug: "tech/java/struts"
  - title: "JSP"
    slug: "tech/java/jsp"
  - title: "Struts 1のリクエスト処理"
    slug: "tech/java/struts-request-flow"
---

## 概要

Servlet は、Java で HTTP リクエストを受け取り、HTTP レスポンスを返すための仕組みです。

## 内容

Java の Web アプリケーションの土台として使われます。
フレームワークを使う場合でも、内部では Servlet の考え方が関係することがあります。
Struts や Spring MVC を理解するときの下地になる技術です。

Struts 1では、`ActionServlet`が共通のServletとしてリクエストを受け取ります。詳しくは[Struts 1のリクエスト処理](/isikoro-note/knowledge/tech/java/struts-request-flow/)で整理しています。
