---
title: "DTO"
summary: "層やプロセスの境界を越えてデータを受け渡すための、振る舞いをほとんど持たないデータ構造。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "API", "Java"]
aliases: ["Data Transfer Object", "データ転送オブジェクト"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "Mapper"
    slug: "tech/architecture/mapper"
  - title: "レイヤードアーキテクチャ"
    slug: "tech/architecture/layered-architecture"
---

## 概要

DTOは、API、画面、アプリケーション層などの境界を越えてデータを受け渡すためのオブジェクトです。

ドメインモデルやDBエンティティをそのまま外部へ公開せず、用途ごとに必要な項目だけを表します。

## AIに任せやすい理由

項目定義と命名ルールが決まれば定型的に生成しやすいためです。ただし、何を外部へ公開するかは設計判断です。

## AI生成コードを見る観点

- パスワード、内部ID、秘密情報が含まれていないか
- 一つのDTOを入力・出力・複数用途で使い回していないか
- nullable項目や単位が明確か
- ドメインモデルの業務ロジックがDTOへ移っていないか

## 参考文献

- Martin Fowler: Data Transfer Object
