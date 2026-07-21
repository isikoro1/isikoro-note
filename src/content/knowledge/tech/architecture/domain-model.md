---
title: "ドメインモデル"
summary: "業務上の概念、状態、ルール、関係をソフトウェア上のモデルとして表現したもの。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "Domain", "Design"]
aliases: ["Domain Model"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "状態遷移"
    slug: "tech/architecture/state-transition"
  - title: "責務"
    slug: "tech/architecture/responsibility"
---

## 概要

ドメインモデルは、対象業務に登場する概念とルールを、コードや図で扱える形へ整理したものです。

決済では `Order`、`Payment`、`Authorization`、`Refund` などが候補になります。単にDBテーブルをクラスへ写すのではなく、業務上の意味と制約を表現します。

## 決済での例

- 注文と決済は別のライフサイクルを持つ
- オーソリ済みの決済だけ売上確定できる
- 返金額の合計は売上確定額を超えられない
- 同じ外部決済IDを重複登録できない

## AI生成コードを見る観点

- 業務用語とクラス名が一致しているか
- 業務ルールがControllerやRepositoryへ散らばっていないか
- DBテーブルの都合だけでモデルが決まっていないか
- 不変条件をモデル自身が守れるか

## 参考文献

- Eric Evans: Domain-Driven Design
