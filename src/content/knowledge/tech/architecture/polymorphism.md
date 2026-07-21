---
title: "ポリモーフィズム"
summary: "共通の型を通じて、異なる実装を同じ呼び出し方で扱う性質。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "OOP", "Design"]
aliases: ["Polymorphism", "多態性"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "インターフェース"
    slug: "tech/architecture/interface"
  - title: "抽象化"
    slug: "tech/architecture/abstraction"
---

## 概要

ポリモーフィズムは、共通の型を介して異なる実装を扱える性質です。

```java
PaymentGateway gateway = new StripePaymentGateway();
PaymentResult result = gateway.authorize(request);
```

`PayPayPaymentGateway`へ差し替えても、呼び出し側は同じ契約を利用できます。

## 利点

- 呼び出し側の条件分岐を減らせる
- 実装の差し替えやテストダブルを使いやすい
- 外部サービス固有の処理を局所化できる

## AI生成コードを見る観点

- `if` や `switch` が実装種類の追加ごとに増えないか
- 共通インターフェースが各実装の違いを無理に隠していないか
- 呼び出し側が具体クラスへ依存していないか
- 契約に不要なメソッドが含まれていないか

## 参考文献

- Erich Gammaほか: Design Patterns
