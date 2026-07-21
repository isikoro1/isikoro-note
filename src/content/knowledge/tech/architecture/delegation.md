---
title: "委譲"
summary: "自分で処理せず、適切な責務を持つ別のオブジェクトへ処理を任せる設計方法。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "OOP", "Design"]
aliases: ["Delegation"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "継承"
    slug: "tech/architecture/inheritance"
  - title: "責務"
    slug: "tech/architecture/responsibility"
---

## 概要

委譲は、あるオブジェクトが処理を抱え込まず、その処理に適した別のオブジェクトへ任せる方法です。

```java
public class PaymentService {
    private final PaymentGateway gateway;

    public PaymentResult authorize(PaymentRequest request) {
        return gateway.authorize(request);
    }
}
```

## 継承との違い

継承は型の関係を作りますが、委譲はオブジェクト同士を組み合わせます。振る舞いの再利用や差し替えが目的なら、委譲の方が結合を弱く保ちやすい場合があります。

## AI生成コードを見る観点

- 共通処理の再利用だけのために継承していないか
- 呼び出し元が委譲先の内部実装へ依存していないか
- 単なる横流しメソッドが増えすぎていないか
- 委譲先の責務が明確か

## 参考文献

- Erich Gammaほか: Design Patterns
