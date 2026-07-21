---
title: "Repository"
summary: "ドメイン側から永続化の詳細を隠し、オブジェクトの取得と保存を表す役割。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "Database", "Java"]
aliases: ["Repository Pattern", "リポジトリパターン"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "ドメインモデル"
    slug: "tech/architecture/domain-model"
  - title: "Mapper"
    slug: "tech/architecture/mapper"
---

## 概要

Repositoryは、ドメインモデルの取得と保存を、コレクションのようなインターフェースで表す役割です。SQL、ORM、外部ストレージなどの詳細を利用側から隠します。

## AIに任せやすい部分

基本的な検索、保存、ページングなどは定型化しやすい部分です。一方、集約の保存単位やロック方式は設計判断です。

## AI生成コードを見る観点

- 業務判断がRepositoryへ入っていないか
- N+1や過剰取得が発生しないか
- トランザクション境界と整合しているか
- 排他制御や一意制約を無視していないか
- `findAll` のような無制限取得を安易に公開していないか

## 参考文献

- Eric Evans: Domain-Driven Design
