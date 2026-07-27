---
title: "Struts 1の画面改修を調査する"
summary: "既存のStruts 1画面について、JSPからAction、業務処理、遷移先まで影響範囲を追う手順。"
category: "Tech"
type: "guide"
status: "draft"
created: "2026-07-28"
updated: "2026-07-28"
parent: "tech/java/struts"
tags: ["Java", "Struts 1", "JSP", "Investigation", "Testing"]
aliases: ["Strutsの影響調査", "Struts画面改修"]
keywords: ["影響調査", "画面遷移", "テスト観点", "ActionForm", "Action", "JSP"]
history:
  - date: "2026-07-28"
    text: "初版作成"
related:
  - title: "Struts"
    slug: "tech/java/struts"
  - title: "Struts 1のリクエスト処理"
    slug: "tech/java/struts-request-flow"
  - title: "struts-config.xml"
    slug: "tech/java/struts-config"
  - title: "logic:equalタグ"
    slug: "tech/java/logic-equal"
---

## 概要

Struts 1の画面改修では、変更するJSPだけを見ても影響範囲を判断できません。表示条件の値がどこで設定され、どのActionと遷移を通って画面へ届くかを追います。

## 調査の起点

- 対象画面のURL
- JSPファイル
- ボタン、リンク、form action
- 変更対象の文言や入力項目
- 再現条件
- 設計書に記載された画面ID・機能ID

分かっている点から設定とコードを双方向に辿ります。

## JSPからJava側へ追う

### 1. 送信先を確認する

```jsp
<html:form action="/userSearch">
```

`action`を手掛かりに、Struts設定の`<action path>`を探します。

### 2. JSPが参照する値を確認する

```jsp
<logic:equal name="userSearchForm" property="mode" value="detail">
```

確認するのは、Beanの実体とスコープ、プロパティ型、setter、取り得る値、条件が偽の場合に非表示となる範囲です。

### 3. struts-config.xmlを読む

対応する`path`から、Actionクラス、Form Bean、入力検証、遷移先を特定します。

### 4. ActionFormを読む

入力値の型、初期値、`reset()`、`validate()`、スコープ、Actionから設定される値を確認します。

### 5. Actionと業務処理を読む

値の取得、業務処理の呼び出し、属性設定、遷移分岐を確認します。変更と関係しない処理を無制限に読む必要はありません。

## Java側からJSPへ追う

1. どのActionやServiceから呼ばれるか
2. 結果がrequest、session、ActionFormのどこへ入るか
3. どのforward名が返るか
4. `struts-config.xml`でどのJSPへ対応するか
5. JSPのどのタグや式が値を表示するか

同じ定数やメッセージキーが複数画面で使われる場合、1行の変更でも複数画面に影響します。

## 影響範囲を広げる共有要素

- 共通JSP、include、Tiles
- 共通ActionForm
- sessionスコープのForm
- 共通ActionやDispatchAction
- メッセージリソース
- 共通JavaScript
- 共通Service・DAO
- global forward

検索結果が多い場合は、「同じ名前」ではなく「同じ実行経路に乗るか」で絞ります。

## テスト観点を処理経路から作る

| 観点 | 確認内容 |
| --- | --- |
| 条件成立 | 対象要素が期待どおり表示される |
| 条件不成立 | 対象要素が表示されない |
| 未設定・null | エラーや意図しない表示がない |
| 入力エラー | Actionへ進まず入力画面へ戻る場合の表示 |
| 画面再表示 | Formやsessionに古い値が残らない |
| 別の遷移元 | 同じJSPへ別Actionから来た場合も成立する |
| 権限・業務状態 | 表示制御だけで処理が保護されたと誤認していない |

テストケースは変更した行だけでなく、その行へ値が届く経路と結果から作ります。

## 調査結果の残し方

```text
/userSearch.do
  → struts-config.xml: /userSearch
  → UserSearchForm.mode
  → UserSearchAction.execute()
  → forward: success
  → user/result.jsp
  → logic:equalでmodeを判定
```

この形なら、なぜ各ファイルをテスト対象にしたかを説明できます。

## 注意点

- JSPの表示制御は、サーバー側の権限チェックの代わりにならない
- 設計書と実装が異なる場合、独断でどちらかを正と決めない
- 既存コードの整理を改修と同時に広げすぎない
- 現場固有のURL、クラス名、業務条件は外部へ持ち出さない
- 推測と、コードや動作で確認した事実を分ける

## 参考文献

- [Struts 1 User Guide: Building Controller Components](https://svn.apache.org/repos/asf/struts/struts1/tags/STRUTS_1_2_3/doc/userGuide/building_controller.xml)
- [Struts 1 Custom Tag Library Reference](https://svn.apache.org/repos/asf/struts/struts1/tags/STRUTS_1_0/web/documentation/tags.html)
