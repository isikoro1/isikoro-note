---
title: "Struts 1のリクエスト処理"
summary: "ブラウザから送られたリクエストがActionServlet、ActionForm、Actionを通り、JSPへ到達するまでを追う。"
category: "Tech"
type: "guide"
status: "draft"
created: "2026-07-28"
updated: "2026-07-28"
parent: "tech/java/struts"
tags: ["Java", "Struts 1", "JSP", "Servlet", "MVC"]
aliases: ["Strutsの処理フロー", "Struts 1のライフサイクル"]
keywords: ["ActionServlet", "ActionMapping", "ActionForm", "Action", "ActionForward", "RequestProcessor"]
history:
  - date: "2026-07-28"
    text: "初版作成"
related:
  - title: "Struts"
    slug: "tech/java/struts"
  - title: "struts-config.xml"
    slug: "tech/java/struts-config"
  - title: "ActionForm"
    slug: "tech/java/struts-action-form"
  - title: "ActionとActionForward"
    slug: "tech/java/struts-action-forward"
---

## 概要

Struts 1では、アプリケーションごとにServletを作ってリクエストを直接振り分けるのではなく、`ActionServlet`が共通の入口になります。実際の処理先は、リクエストのパスと`struts-config.xml`の設定から決まります。

## 全体の流れ

```text
ブラウザ
  → ActionServlet
  → RequestProcessor
  → ActionMapping
  → ActionFormの生成・値設定・検証
  → Action.execute()
  → Serviceなどの業務処理
  → ActionForward
  → JSP
  → HTMLレスポンス
```

`RequestProcessor`は、ActionMappingの特定、Form Beanの準備、入力検証、Actionの実行などを担当します。

## 1. ActionServletがリクエストを受け取る

`web.xml`には、Controllerとなる`ActionServlet`とURLパターンが定義されます。

```xml
<servlet>
  <servlet-name>action</servlet-name>
  <servlet-class>org.apache.struts.action.ActionServlet</servlet-class>
  <load-on-startup>1</load-on-startup>
</servlet>
<servlet-mapping>
  <servlet-name>action</servlet-name>
  <url-pattern>*.do</url-pattern>
</servlet-mapping>
```

この場合、`/userSearch.do`のようなリクエストがStrutsへ渡ります。実際のマッピングは最初に`web.xml`で確認します。

## 2. ActionMappingを特定する

`struts-config.xml`の`<action path>`が、リクエストのパスとActionクラスを対応付けます。

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

この設定から、Action、ActionForm、入力エラー時の戻り先、正常終了時の遷移先を確認できます。

## 3. ActionFormへ入力値を設定する

`name`が指定されている場合、対応するForm Beanがrequestまたはsessionスコープから取得され、なければ生成されます。リクエストパラメータと同名のプロパティへ値が設定されます。

```text
リクエストパラメータ: userId=123
              ↓
userSearchForm.setUserId("123")
```

HTTPの入力値は基本的に文字列です。Formのプロパティ型との変換、空文字、未送信、配列項目を確認します。

## 4. reset()とvalidate()を実行する

代表的な順序は、Form Beanの準備、`reset()`、パラメータ設定、`validate()`です。検証エラーがある場合は通常Actionを実行せず、`input`で指定された画面へ戻ります。

Actionに到達しない場合は、入力検証も確認対象です。

## 5. Actionを実行する

```java
public ActionForward execute(
    ActionMapping mapping,
    ActionForm form,
    HttpServletRequest request,
    HttpServletResponse response) throws Exception {

    UserSearchForm searchForm = (UserSearchForm) form;
    User user = userService.find(searchForm.getUserId());
    request.setAttribute("user", user);
    return mapping.findForward("success");
}
```

Actionでは、入力値の取得、業務処理の呼び出し、JSPへ渡す値の設定、遷移先の選択が行われます。

## 6. ActionForwardからJSPへ進む

`mapping.findForward("success")`は、`<forward name="success">`を探します。forwardなら同じrequestの属性をJSPから参照できます。redirectなら新しいリクエストになり、request属性は引き継がれません。

## 値がJSPへ届く経路

| JSP上の値 | 主な設定元 |
| --- | --- |
| ActionFormのプロパティ | リクエストパラメータ、Action内のsetter |
| request属性 | `request.setAttribute()` |
| session属性 | `session.setAttribute()` |
| メッセージ・エラー | `saveMessages()`、`saveErrors()`など |

`logic:equal`や`bean:write`を読むときは、Bean名とスコープから設定元を逆引きします。

## デバッグ時の分岐点

- Actionへ到達しない: URLマッピング、入力検証、別Actionへの委譲
- Formに値が入らない: HTMLのname、setter、型、スコープ
- JSPで値が見えない: forwardかredirectか、属性名、スコープ
- 想定外の画面へ進む: Actionの戻り値と`<forward>`

## 参考文献

- [Struts 1 User Guide: Building Controller Components](https://svn.apache.org/repos/asf/struts/struts1/tags/STRUTS_1_2_3/doc/userGuide/building_controller.xml)
- [ActionMapping API](https://svn.apache.org/repos/asf/struts/struts1/tags/STRUTS_1_1/legacy/api-1.0/org/apache/struts/action/ActionMapping.html)
