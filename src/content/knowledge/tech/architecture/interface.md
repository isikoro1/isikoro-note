---
title: "インターフェース"
summary: "利用側と実装側の間で、提供する操作やデータの契約を定義する境界。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "Design", "Java"]
aliases: ["Interface", "インタフェース"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "抽象化"
    slug: "tech/architecture/abstraction"
  - title: "ポリモーフィズム"
    slug: "tech/architecture/polymorphism"
---

## 概要

インターフェースは、利用側が何を呼び出せるか、どの入力を渡し、どの結果を受け取るかを定める契約です。

```java
public interface PaymentGateway {
    AuthorizationResult authorize(PaymentRequest request);
    CaptureResult capture(PaymentId paymentId);
}
```

Javaの `interface` に限らず、HTTP API、関数の引数と戻り値、モジュール境界もインターフェースに含まれます。

## 設計する内容

- 操作名と責務
- 入力と戻り値
- 失敗の表現方法
- 再実行可能性
- バージョン互換性

## AI生成コードを見る観点

- 実装固有の型や例外が外へ漏れていないか
- 一つのインターフェースが多すぎる役割を持っていないか
- 呼び出し側が不要なメソッドへ依存していないか
- nullや例外の契約が曖昧でないか

## 参考文献

- Robert C. Martin: Clean Architecture
