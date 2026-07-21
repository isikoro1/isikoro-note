---
title: "logic:equalタグ"
summary: "Struts 1のJSPで、指定した値が基準値と等しい場合だけ本文を表示するLogic Taglibの条件分岐タグ。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
importance: "medium"
tags: ["Java", "JSP", "Struts", "View", "Legacy"]
aliases: ["logic equal", "logic:equal", "EqualTag"]
keywords:
  - logic:equal
  - Struts Logic Taglib
  - JSP
  - 条件分岐
  - name
  - property
  - value
  - scope
  - JSTL
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "JSP"
    slug: "tech/java/jsp"
  - title: "Struts"
    slug: "tech/java/struts"
---

## 概要

`<logic:equal>` は、指定した値と基準値が等しい場合だけ、タグで囲んだ部分を処理する条件分岐タグです。

JSPそのものの標準タグではなく、**Struts 1のLogic Taglib**に含まれます。Struts 1とJSPを使った既存のJava業務システムで見かけることがあります。

## 基本的な使い方

最初に、JSPでLogic Taglibを利用できるようにします。

```jsp
<%@ taglib uri="http://struts.apache.org/tags-logic" prefix="logic" %>
```

たとえば、`userForm` の `status` が `ACTIVE` の場合だけメッセージを表示するなら、次のように書きます。

```jsp
<logic:equal name="userForm" property="status" value="ACTIVE">
  <p>利用中のユーザーです。</p>
</logic:equal>
```

この例では、次の値を比較しています。

- `name="userForm"`: 比較対象のBean
- `property="status"`: Beanから取得するプロパティ
- `value="ACTIVE"`: 比較する基準値

概念的には、次の条件に近い処理です。

```java
"ACTIVE".equals(userForm.getStatus())
```

ただし、実際の値の取得や比較時の型変換はStrutsのタグ実装が行います。

## 主な属性

| 属性 | 役割 |
| --- | --- |
| `name` | ページ、リクエスト、セッション、アプリケーションのいずれかから取得するBean名 |
| `property` | Beanの中で比較するプロパティ名 |
| `value` | 比較対象となる基準値 |
| `scope` | Beanを探すスコープ。省略時は各スコープから順に検索される |
| `parameter` | リクエストパラメータの値を比較するときに指定する |
| `header` | HTTPヘッダーの値を比較するときに指定する |
| `cookie` | Cookieの値を比較するときに指定する |

通常のStruts画面では、`name`、`property`、`value`の組み合わせを読む機会が多くなります。

## スコープを指定する例

同じ名前の属性が複数のスコープに存在する可能性がある場合は、`scope`を明示します。

```jsp
<logic:equal
  name="userForm"
  property="status"
  value="ACTIVE"
  scope="request">
  <p>利用中のユーザーです。</p>
</logic:equal>
```

`scope`には、`page`、`request`、`session`、`application`を指定できます。

## リクエストパラメータを比較する例

```jsp
<logic:equal parameter="mode" value="edit">
  <p>編集モードです。</p>
</logic:equal>
```

URLが `?mode=edit` のようになっている場合に、タグ内が処理されます。

ただし、リクエストパラメータを使って重要な業務判断や権限制御を行うべきではありません。画面表示の切り替えと、サーバー側で保証すべき処理は分けて考えます。

## 等しくない場合

値が等しくない場合だけ処理したいときは、`<logic:notEqual>`を使います。

```jsp
<logic:notEqual name="userForm" property="status" value="ACTIVE">
  <p>現在は利用できません。</p>
</logic:notEqual>
```

## JSTLで書く場合

新しいJSPコードでは、Struts 1固有のタグよりもJSTLとELを使った次の書き方のほうが意図を読み取りやすい場合があります。

```jsp
<c:if test="${userForm.status eq 'ACTIVE'}">
  <p>利用中のユーザーです。</p>
</c:if>
```

ただし、既存システムではプロジェクト内の記述方法を揃える必要があります。単独で置き換えるのではなく、利用しているStrutsやJSPのバージョン、タグライブラリ、テスト範囲を確認します。

## コードを読むときの観点

`<logic:equal>`を見つけたら、次の順番で確認します。

1. `name`で指定された値を、ActionやServletのどこで設定しているか
2. `property`の型と、実際に返る値は何か
3. `scope`が明示されているか
4. 条件によって、どのHTMLや入力項目が表示されるか
5. 画面表示だけでなく、業務ルールや権限制御までJSPに入り込んでいないか

JSPの条件分岐が増えると、画面の表示条件を追いにくくなります。複雑な判断はActionやサービス層で行い、JSPには表示に必要な結果を渡すほうが、責務を分けやすくなります。

## 参考文献

- [EqualTag（Apache Struts 1 API Documentation）](https://svn.apache.org/repos/asf/struts/struts1/tags/STRUTS_1_2_5/legacy/api-1.1/org/apache/struts/taglib/logic/EqualTag.html)
- [CompareTagBase（Apache Struts 1 API Documentation）](https://svn.apache.org/repos/asf/struts/archive/trunk/struts-doc-1.1/api/org/apache/struts/taglib/logic/CompareTagBase.html)
