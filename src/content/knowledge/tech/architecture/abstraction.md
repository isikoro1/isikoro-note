---
title: "抽象化"
summary: "具体的な実装差を隠し、利用側に必要な役割や契約だけを表す設計の考え方。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "OOP", "Design"]
aliases: ["Abstraction"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "インターフェース"
    slug: "tech/architecture/interface"
  - title: "オブジェクト指向"
    slug: "tech/architecture/object-oriented-programming"
---

## 概要

抽象化は、具体的な処理や製品ごとの差を隠し、利用側に必要な役割だけを取り出す考え方です。

たとえば決済事業者ごとのAPI仕様を `PaymentGateway` の背後へ隠せば、アプリケーションは「オーソリする」という役割に依存できます。

```java
public interface PaymentGateway {
    AuthorizationResult authorize(PaymentRequest request);
}
```

## 適切な抽象化

良い抽象化は、実際に変わりやすい部分を隔離します。単にクラスやインターフェースを増やすことではありません。

## AI生成コードを見る観点

- 実装が一つしかないのに不要な抽象化を増やしていないか
- 外部サービス固有の型が内部へ漏れていないか
- 共通化によって重要な差異が失われていないか
- 名前から契約と責務が分かるか

## 参考文献

- Robert C. Martin: Clean Architecture
