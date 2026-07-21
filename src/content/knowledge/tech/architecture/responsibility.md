---
title: "責務"
summary: "クラスや関数が引き受ける判断、処理、知識の範囲。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "Design"]
aliases: ["Responsibility", "責務分離"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "オブジェクト指向"
    slug: "tech/architecture/object-oriented-programming"
  - title: "レイヤードアーキテクチャ"
    slug: "tech/architecture/layered-architecture"
---

## 概要

責務は、そのクラスや関数が何を知り、何を判断し、何を実行するかの範囲です。

`Payment` は決済状態の整合性、`PaymentGateway` は外部決済サービスとの通信、`PaymentService` はユースケース全体の調整を担当する、というように分けます。

## 判断の目安

- 変更理由を一つに説明できるか
- 名前と実際の処理が一致しているか
- DB、外部API、業務判断、表示処理が混在していないか
- privateメソッドが多すぎて複数の役割を抱えていないか

## AI生成コードを見る観点

`Service` や `Util` に処理が集中しやすいため、各処理をどの概念が所有すべきか確認します。行数ではなく、変更理由と依存先の数を見ることが重要です。

## 参考文献

- Robert C. Martin: Agile Software Development, Principles, Patterns, and Practices
