---
title: "JSP"
summary: "JavaのWebアプリケーションでHTMLを生成するために使われる画面テンプレート技術。"
category: "Tech"
type: "term"
status: "stub"
updated: "2026-07-28"
tags: ["Java", "Web", "View"]
aliases: ["JavaServer Pages"]
history:
  - date: "2026-07-21"
    text: "logic:equalタグのページへのリンクを追加"
  - date: "2026-07-28"
    text: "Struts 1のリクエスト処理へのリンクを追加"
related:
  - title: "Servlet"
    slug: "tech/java/servlet"
  - title: "Struts"
    slug: "tech/java/struts"
  - title: "logic:equalタグ"
    slug: "tech/java/logic-equal"
  - title: "Struts 1のリクエスト処理"
    slug: "tech/java/struts-request-flow"
---

## 概要

JSP は JavaServer Pages の略で、Java の Web アプリケーションで画面を作るための技術です。
HTML の中に Java 側の値を埋め込んで表示できます。

## 内容

古い Java 業務システムの画面表示で使われることがあります。
Struts と組み合わせて使われるケースもあります。
JSP は View 側の技術であり、業務ロジックを置きすぎると読みにくくなりやすいです。

Struts 1を使ったJSPでは、条件によって表示内容を切り替えるために[logic:equalタグ](/isikoro-note/knowledge/tech/java/logic-equal/)などのタグライブラリが使われることがあります。

JSPに表示される値がどこから来たかは、[Struts 1のリクエスト処理](/isikoro-note/knowledge/tech/java/struts-request-flow/)に沿ってActionForm、Action、request・session属性を確認します。
