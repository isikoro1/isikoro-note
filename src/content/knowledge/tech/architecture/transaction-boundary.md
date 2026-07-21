---
title: "トランザクション境界"
summary: "複数のDB操作を、どこからどこまで一つの原子的な処理として扱うかを定める境界。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "Database", "Transaction"]
aliases: ["Transaction Boundary"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "DB制約"
    slug: "tech/database/database-constraints"
---

## 概要

トランザクション境界は、複数のDB操作を一つの成功または失敗として扱う範囲です。

注文状態と決済状態を同時に更新する場合、片方だけ成功すると不整合が発生します。どのユースケースを一単位としてコミットするかを明確にします。

## 外部APIとの違い

DBトランザクションで、外部決済APIの成功まで巻き戻すことはできません。外部API成功後にDB更新が失敗する可能性を前提として、再試行、Webhook、照合処理などを設計します。

## AI生成コードを見る観点

- `@Transactional` の範囲が広すぎないか
- 外部API呼び出し中にDBロックを保持していないか
- privateメソッド呼び出しなどでトランザクションが有効になっていない問題がないか
- 途中失敗時に一部だけ保存されないか
- 再実行時に重複処理されないか

## 参考文献

- Spring Framework Documentation: Transaction Management
