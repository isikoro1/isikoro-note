---
title: "バリデーション"
summary: "入力値や状態が、形式上および業務上の条件を満たしているか検証する処理。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "Validation", "API"]
aliases: ["Validation", "入力検証"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "DTO"
    slug: "tech/architecture/dto"
  - title: "ドメインモデル"
    slug: "tech/architecture/domain-model"
---

## 概要

バリデーションは、入力値や現在の状態が処理可能な条件を満たしているか確認することです。

## 主な分類

- 形式検証: 必須、文字数、数値範囲、書式
- 業務検証: 残高、権限、状態遷移、返金可能額
- DBによる保証: 一意性、外部キー、NOT NULL

形式検証はDTOやAPI境界、業務ルールはドメインモデル、競合を含む最終保証はDB制約というように、適切な場所へ分けます。

## AIに任せやすい部分

アノテーションや入力チェックの雛形は生成しやすい一方、業務上の条件と検証場所は人が決める必要があります。

## AI生成コードを見る観点

- フロントエンドの検証だけに依存していないか
- 同じルールが複数層へ重複していないか
- 事前確認とDB更新の間の競合を考慮しているか
- エラー内容が内部情報を漏らしていないか

## 参考文献

- Jakarta Validation Specification
