---
title: "Struts"
summary: "Struts 1を中心に、リクエストがActionを経由してJSPへ到達する仕組みを整理する入口。"
category: "Tech"
type: "guide"
status: "draft"
created: "2026-07-10"
updated: "2026-07-28"
importance: "high"
keywords:
  - Struts 1
  - ActionServlet
  - ActionForm
  - Action
  - ActionForward
  - JSP
  - struts-config.xml
tags: ["Java", "Web", "MVC", "Legacy"]
aliases: ["Apache Struts", "Struts Framework", "Struts 1"]
history:
  - date: "2026-07-10"
    text: "初版作成"
  - date: "2026-07-28"
    text: "Struts 1の処理構造を辿る親ページとして再構成"
related:
  - title: "Struts 1のリクエスト処理"
    slug: "tech/java/struts-request-flow"
  - title: "struts-config.xml"
    slug: "tech/java/struts-config"
  - title: "ActionForm"
    slug: "tech/java/struts-action-form"
  - title: "ActionとActionForward"
    slug: "tech/java/struts-action-forward"
  - title: "Struts 1の画面改修を調査する"
    slug: "tech/java/struts-investigation"
  - title: "Servlet"
    slug: "tech/java/servlet"
  - title: "JSP"
    slug: "tech/java/jsp"
---

## 概要

StrutsはJavaのWebアプリケーションフレームワークです。このページでは、既存の業務システムで見かける**Struts 1**を中心に扱います。

Struts 1を読むときは、クラスや設定項目を個別に暗記するより、1件のHTTPリクエストがどの設定とJavaクラスを通り、どのJSPへ到達するかを追えることが重要です。

## Struts 1とStruts 2

Struts 1とStruts 2は、名前は似ていますが内部構造が大きく異なります。

| 観点 | Struts 1 | Struts 2 |
| --- | --- | --- |
| リクエストの入口 | `ActionServlet` | Filter |
| 入力値の受け皿 | `ActionForm` | 主にActionのプロパティ |
| Actionの戻り値 | `ActionForward` | 文字列のResult名 |
| 主な設定 | `struts-config.xml` | `struts.xml`、アノテーションなど |
| JSPタグの例 | `html:*`、`bean:*`、`logic:*` | `s:*` |

依存ライブラリ、import文、設定ファイル、JSPのtaglib宣言から、どちらを使っているかを最初に確認します。

## 基本構造

1. ブラウザがURLへリクエストを送る
2. `web.xml`に従って`ActionServlet`が受け取る
3. `struts-config.xml`の`<action>`から`ActionMapping`を特定する
4. `ActionForm`へ入力値を設定・検証する
5. 対応する`Action`の`execute()`を呼び出す
6. Actionが業務処理を呼び出し、表示値を設定する
7. `ActionForward`が遷移先を決める
8. JSPがHTMLを生成する

詳細は[Struts 1のリクエスト処理](/isikoro-note/knowledge/tech/java/struts-request-flow/)で扱います。

## MVCとの対応

| 役割 | Struts 1で関係する要素 |
| --- | --- |
| Controller | `ActionServlet`、`ActionMapping`、`Action` |
| Model | Service、業務オブジェクト、DAOなど |
| View | JSP、Strutsタグライブラリ |
| 入出力の橋渡し | `ActionForm`、request・session属性 |

`Action`はController側の要素です。業務ロジックまで集めると、画面遷移、入力制御、業務判断が混ざります。既存コードでは理想的な分離を前提にせず、実際の配置を確認します。

## コードを読む入口

1. JSPの`<html:form action="...">`やリンク先を確認する
2. `struts-config.xml`で対応する`<action path="...">`を探す
3. `type`からActionクラスを開く
4. `name`からForm Beanを特定する
5. `execute()`と、そこから呼ばれる業務処理を読む
6. `findForward()`と`<forward>`から遷移先JSPを確認する

Java側から画面へ追う場合は、この順序を逆に辿ります。

## 深掘りページ

- [Struts 1のリクエスト処理](/isikoro-note/knowledge/tech/java/struts-request-flow/): リクエストからJSPまでの一本の流れ
- [struts-config.xml](/isikoro-note/knowledge/tech/java/struts-config/): URL、Action、Form、遷移先の対応
- [ActionForm](/isikoro-note/knowledge/tech/java/struts-action-form/): 入力値、スコープ、`reset()`、`validate()`
- [ActionとActionForward](/isikoro-note/knowledge/tech/java/struts-action-forward/): 処理の実行と画面遷移
- [Struts 1の画面改修を調査する](/isikoro-note/knowledge/tech/java/struts-investigation/): 既存画面を変更するときの追跡手順
- [logic:equalタグ](/isikoro-note/knowledge/tech/java/logic-equal/): JSP上の表示条件

## 参考文献

- [Struts 1 Action API](https://svn.apache.org/repos/asf/struts/struts1/tags/STRUTS_1_3_10/src/core/src/main/java/org/apache/struts/action/Action.java)
- [Struts 1 ActionMapping API](https://svn.apache.org/repos/asf/struts/struts1/tags/STRUTS_1_1/legacy/api-1.0/org/apache/struts/action/ActionMapping.html)
