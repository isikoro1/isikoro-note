---
title: "継承"
summary: "既存の型の性質や振る舞いを引き継いで新しい型を定義する仕組み。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "OOP", "Design"]
aliases: ["Inheritance"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "委譲"
    slug: "tech/architecture/delegation"
  - title: "ポリモーフィズム"
    slug: "tech/architecture/polymorphism"
---

## 概要

継承は、親クラスの状態や振る舞いを子クラスへ引き継ぐ仕組みです。

```java
public class CreditCardPayment extends Payment {
}
```

## 利点と注意点

共通の性質を表現できますが、親子関係を強く結び付けます。親クラスの変更が多数の子クラスへ波及し、深い継承階層は処理を追いにくくします。

振る舞いを再利用したいだけなら、委譲やインターフェースの方が変更しやすい場合があります。

## AI生成コードを見る観点

- 本当に「子は親の一種」と言えるか
- 親のメソッドを子が不自然に無効化していないか
- 共通処理の再利用だけを目的にしていないか
- 継承階層が深くなっていないか

## 参考文献

- Erich Gammaほか: Design Patterns
