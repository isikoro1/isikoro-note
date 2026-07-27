---
title: "ActionForm"
summary: "Struts 1で画面入力値を受け取り、ActionとJSPの間で値を運ぶForm Bean。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-28"
updated: "2026-07-28"
parent: "tech/java/struts"
tags: ["Java", "Struts 1", "Form", "Validation"]
aliases: ["Struts ActionForm", "Form Bean"]
keywords: ["reset", "validate", "request scope", "session scope", "DynaActionForm", "getter", "setter"]
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

`ActionForm`は、Struts 1で画面入力値を受け取るJavaBeanです。HTMLの入力項目名とプロパティを対応させ、Actionへまとめて渡します。

```java
public class UserSearchForm extends ActionForm {
    private String userId;
    private boolean detail;

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }
    public boolean isDetail() { return detail; }
    public void setDetail(boolean detail) { this.detail = detail; }
}
```

## 入力値が入る仕組み

`<input type="text" name="userId">`が送信されると、Strutsは`setUserId()`を通して値を設定します。プロパティ名、setter、HTMLの`name`が一致しているかを確認します。

## requestスコープとsessionスコープ

| scope | 寿命 | 向いている場面 | 注意点 |
| --- | --- | --- | --- |
| `request` | 1回のリクエスト | 単一画面の入力と結果 | redirectでは値を引き継げない |
| `session` | セッションが続く間 | 複数画面にまたがる入力 | 古い値、別タブ、後始末に注意 |

sessionスコープのFormは複数リクエストで再利用されます。初期化箇所と削除箇所を確認します。

## reset()

`reset()`は、リクエストパラメータが設定される前にFormの状態を整えるために使います。

```java
@Override
public void reset(ActionMapping mapping, HttpServletRequest request) {
    detail = false;
}
```

未チェックのcheckboxはパラメータ自体が送られません。sessionスコープでは、初期化しないと前回の`true`が残ることがあります。一方、無条件な初期化で複数画面に保持したい値を消さないよう注意します。

## validate()

```java
@Override
public ActionErrors validate(ActionMapping mapping, HttpServletRequest request) {
    ActionErrors errors = new ActionErrors();
    if (userId == null || userId.isBlank()) {
        errors.add("userId", new ActionMessage("errors.required", "ユーザーID"));
    }
    return errors;
}
```

エラーがある場合、通常はActionを実行せず、ActionMappingの`input`へ戻ります。入力形式のエラーと、ActionやServiceで判定する業務エラーは分けて考えます。

## JSPとの接続

```jsp
<html:text property="userId"/>

<logic:equal name="userSearchForm" property="detail" value="true">
  <p>詳細条件を表示します。</p>
</logic:equal>
```

Bean名は、`struts-config.xml`の`<form-bean name>`や`<action name>`から特定します。

## DynaActionForm

`DynaActionForm`では、専用Javaクラスを作らず設定ファイルでプロパティを定義できます。Formクラスが見つからない場合は`form-property`を確認します。

## 調査時の確認事項

- Form Bean名と実装クラス
- requestとsessionのどちらに置かれるか
- `reset()`で何が初期化されるか
- `validate()`が実行される設定か
- JSPの入力項目名とsetterが一致するか
- ActionがFormの値を書き換えているか
- sessionスコープの場合、いつ削除されるか

## 参考文献

- [Struts 1 ActionForm source](https://svn.apache.org/repos/asf/struts/struts1/tags/STRUTS_1_3_10/src/core/src/main/java/org/apache/struts/action/ActionForm.java)
- [Struts 1 User Guide: Building Controller Components](https://svn.apache.org/repos/asf/struts/struts1/tags/STRUTS_1_2_3/doc/userGuide/building_controller.xml)
