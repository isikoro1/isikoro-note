---
title: "ActionとActionForward"
summary: "Struts 1で処理を実行するActionと、次の遷移先を表すActionForwardの役割。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-28"
updated: "2026-07-28"
parent: "tech/java/struts"
tags: ["Java", "Struts 1", "Action", "Navigation"]
aliases: ["Struts Action", "ActionForward", "findForward"]
keywords: ["execute", "ActionMapping", "findForward", "forward", "redirect", "thread safe"]
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
  - title: "ActionForm"
    slug: "tech/java/struts-action-form"
---

## 概要

Struts 1の`Action`は、特定のリクエストに対する処理を受け持ちます。入力値を受け取り、業務処理を呼び出し、表示用の値を用意して、`ActionForward`を返します。

## execute()

```java
public ActionForward execute(
    ActionMapping mapping,
    ActionForm form,
    HttpServletRequest request,
    HttpServletResponse response) throws Exception {
    // 処理
}
```

| 引数 | 主な用途 |
| --- | --- |
| `mapping` | 現在のAction設定やforwardを参照する |
| `form` | ActionFormから入力値を受け取る |
| `request` | リクエスト属性、パラメータ、セッションを扱う |
| `response` | レスポンスを直接操作する場合に使う |

## 典型的な処理

```java
UserSearchForm searchForm = (UserSearchForm) form;
User user = userService.find(searchForm.getUserId());
request.setAttribute("user", user);
return mapping.findForward("success");
```

Actionは業務処理をServiceへ委譲し、その結果から表示データと遷移先を決める形が読みやすくなります。

## ActionForward

```java
return mapping.findForward("success");
```

```xml
<forward name="success" path="/WEB-INF/jsp/user/result.jsp"/>
```

論理名を介することで、処理と物理的な画面パスを分けています。

## forwardとredirect

| 観点 | forward | redirect |
| --- | --- | --- |
| 処理 | サーバー内部で転送 | ブラウザへ別URLへの移動を指示 |
| リクエスト | 同じrequest | 新しいrequest |
| request属性 | 引き継げる | 原則引き継げない |
| ブラウザのURL | 通常変わらない | 移動先に変わる |
| 再読み込み | 元のリクエストを再実行し得る | POST後の再送信を避けやすい |

## Actionのインスタンス変数

Struts 1のActionは、複数リクエストから利用される可能性があります。リクエスト固有の状態をActionのインスタンス変数へ保存すると、別リクエストの値が混ざる危険があります。

```java
// 避ける
public class UserAction extends Action {
    private String currentUserId;
}
```

リクエスト固有の値は、ローカル変数、ActionForm、request、必要な場合はsessionなど、寿命が明確な場所へ置きます。

## DispatchAction

`DispatchAction`では、1つのActionクラス内の複数メソッドをパラメータで呼び分けます。

```xml
<action path="/user" type="example.web.UserAction" parameter="method"/>
```

`execute()`だけを探すと処理本体を見落とすため、`parameter`属性と継承クラスを確認します。

## 調査時の確認事項

- 実際に呼ばれるのは`execute()`か別メソッドか
- ActionFormをどの型へキャストしているか
- 呼び出すService・DAOと例外処理
- request・sessionへ設定する属性
- 返し得るforward名と分岐条件
- forwardかredirectか
- インスタンス変数にリクエスト固有の状態がないか

## 参考文献

- [Struts 1 Action source](https://svn.apache.org/repos/asf/struts/struts1/tags/STRUTS_1_3_10/src/core/src/main/java/org/apache/struts/action/Action.java)
- [Struts 1 ActionForward source](https://svn.apache.org/repos/asf/struts/struts1/tags/STRUTS_1_3_10/src/core/src/main/java/org/apache/struts/action/ActionForward.java)
