---
title: "struts-config.xml"
summary: "Struts 1でForm Bean、Action、入力画面、遷移先の対応を定義する設定ファイル。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-28"
updated: "2026-07-28"
parent: "tech/java/struts"
tags: ["Java", "Struts 1", "XML", "Configuration"]
aliases: ["Struts設定ファイル", "struts config"]
keywords: ["action-mappings", "form-beans", "forward", "path", "type", "name", "scope", "validate", "input"]
history:
  - date: "2026-07-28"
    text: "初版作成"
related:
  - title: "Struts"
    slug: "tech/java/struts"
  - title: "Struts 1のリクエスト処理"
    slug: "tech/java/struts-request-flow"
  - title: "ActionForm"
    slug: "tech/java/struts-action-form"
  - title: "ActionとActionForward"
    slug: "tech/java/struts-action-forward"
---

## 概要

`struts-config.xml`は、Struts 1の主要な設定ファイルです。既存画面を調査するときは、URL、Action、ActionForm、遷移先JSPを結ぶ地図として使います。

## form-beans

```xml
<form-beans>
  <form-bean name="userSearchForm" type="example.web.UserSearchForm"/>
</form-beans>
```

`<action name="userSearchForm">`の`name`は、この論理名を参照します。

## action-mappings

```xml
<action
  path="/userSearch"
  type="example.web.UserSearchAction"
  name="userSearchForm"
  scope="request"
  validate="true"
  input="/WEB-INF/jsp/user/search.jsp">
  <forward name="success" path="/WEB-INF/jsp/user/result.jsp"/>
</action>
```

| 属性 | 確認する内容 |
| --- | --- |
| `path` | 対応するリクエストパス |
| `type` | 実行されるActionクラス |
| `name` | 使用するForm Bean |
| `scope` | requestとsessionのどちらに置くか |
| `validate` | Action実行前に入力検証するか |
| `input` | 入力検証に失敗した場合の戻り先 |
| `parameter` | DispatchActionなどで呼び分けに使う値 |

## forward

```xml
<forward name="success" path="/WEB-INF/jsp/user/result.jsp"/>
<forward name="complete" path="/userComplete.do" redirect="true"/>
```

`redirect="true"`では新しいリクエストが発生します。指定がなければ通常はサーバー内部でforwardします。

## global-forwards

複数のActionで共通利用する遷移先は`<global-forwards>`に定義できます。

```xml
<global-forwards>
  <forward name="login" path="/login.do"/>
  <forward name="systemError" path="/WEB-INF/jsp/error/system.jsp"/>
</global-forwards>
```

## 複数設定ファイル

大きなシステムでは、設定が機能やモジュール単位に分割されていることがあります。ファイル名だけでなくActionクラス名、Form Bean名、`path`でもリポジトリ全体を検索します。

## 調査するときの読み方

1. JSPのform actionまたはURLから`path`を探す
2. `type`からActionクラスを開く
3. `name`を`form-beans`から引く
4. `validate`と`input`から入力エラー時の動きを確認する
5. Actionが返す論理名と`forward`を対応させる
6. `redirect`の有無と、遷移先がJSPか別Actionかを確認する

## よくある見落とし

- Actionの`path`とJSPファイル名が一致するとは限らない
- 遷移先がJSPではなく別Actionの場合がある
- sessionスコープのFormが再利用される場合がある
- `DispatchAction`では`parameter`により実行メソッドが変わる
- 独自の`ActionMapping`や`RequestProcessor`で挙動が拡張される場合がある

## 参考文献

- [Struts 1 Configuration DTD](https://svn.apache.org/repos/asf/struts/struts1/tags/STRUTS_1_3_10/src/core/src/main/resources/org/apache/struts/resources/struts-config_1_3.dtd)
- [ActionMapping API](https://svn.apache.org/repos/asf/struts/struts1/tags/STRUTS_1_1/legacy/api-1.0/org/apache/struts/action/ActionMapping.html)
