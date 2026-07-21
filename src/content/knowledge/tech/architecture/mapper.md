---
title: "Mapper"
summary: "DTO、ドメインモデル、DBエンティティなど、異なるデータ表現の間を変換する役割。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "Data Mapping", "Java"]
aliases: ["Data Mapper", "マッパー"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "DTO"
    slug: "tech/architecture/dto"
  - title: "Repository"
    slug: "tech/architecture/repository"
---

## 概要

Mapperは、API用DTO、ドメインモデル、永続化用エンティティなど、目的の異なるデータ表現を相互に変換します。

## AIに任せやすい理由

変換規則が明確なら定型処理が多く、生成とレビューを分けやすいためです。

## 注意点

単なる項目コピーだけでなく、金額の単位、日時のタイムゾーン、列挙値、nullの扱いなどで不具合が発生します。業務判断をMapperへ混ぜると責務が曖昧になります。

## AI生成コードを見る観点

- 項目の取りこぼしや逆方向の変換ミスがないか
- 円と最小通貨単位などの単位が一致しているか
- nullを勝手な初期値へ変えていないか
- IDや状態を外部入力で上書きしていないか
- 変換テストがあるか

## 参考文献

- Martin Fowler: Data Mapper
