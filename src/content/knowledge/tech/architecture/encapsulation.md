---
title: "カプセル化"
summary: "内部状態を直接操作させず、許可した操作を通じて整合性を守る設計の考え方。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "OOP", "Design"]
aliases: ["Encapsulation"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "オブジェクト指向"
    slug: "tech/architecture/object-oriented-programming"
  - title: "状態遷移"
    slug: "tech/architecture/state-transition"
---

## 概要

カプセル化は、オブジェクトの内部状態を外部から直接変更させず、公開された操作を通じて変更する考え方です。

目的はフィールドを `private` にすることではなく、オブジェクトが不正な状態にならないように変更ルールを一か所へ集めることです。

## 例

```java
public void capture() {
    if (status != PaymentStatus.AUTHORIZED) {
        throw new IllegalStateException("売上確定できない状態です");
    }
    status = PaymentStatus.CAPTURED;
}
```

`setStatus` を公開して自由に変更させるより、業務上意味のある操作を公開した方が状態遷移を守りやすくなります。

## AI生成コードを見る観点

- setterが無制限に公開されていないか
- コンストラクタだけで不正な値を作れないか
- 状態変更の条件が複数箇所へ分散していないか
- コレクションの内部参照をそのまま返していないか

## 注意点

すべてを隠すことが目的ではありません。利用側が必要とする情報や操作は、意図の分かる形で公開します。

## 参考文献

- Martin Fowler: Refactoring
