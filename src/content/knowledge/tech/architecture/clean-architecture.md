---
title: "クリーンアーキテクチャ"
summary: "ビジネスルールを中心に置き、UI・DB・フレームワークなどの詳細に依存しすぎないようにする設計思想。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-14"
updated: "2026-07-14"
tags: ["Architecture", "Backend", "Design"]
aliases: ["Clean Architecture", "クリーンアーキテクチャー"]
keywords:
  - use case
  - entity
  - interface adapter
  - framework
  - dependency rule
  - 依存性逆転
  - 責務分離
  - ビジネスルール
  - ユースケース
  - テスタビリティ
history:
  - date: "2026-07-14"
    text: "初版作成"
related:
  - title: "レイヤードアーキテクチャ"
    slug: "tech/architecture/layered-architecture"
  - title: "MVC"
    slug: "tech/architecture/mvc"
  - title: "REST API"
    slug: "tech/web/rest-api"
---

## 概要

クリーンアーキテクチャは、アプリケーションの中心にビジネスルールを置き、UI、DB、外部API、フレームワークなどの詳細に依存しすぎないようにする設計思想です。

重要なのは、画面やDBから設計を始めるのではなく、「何を実現する業務処理なのか」を中心に置くことです。

## 内容

クリーンアーキテクチャでは、内側ほど重要なルール、外側ほど変更されやすい詳細として扱います。

大まかには次のように分けて考えます。

- Entity: 業務上の重要な概念やルール
- Use Case: アプリケーションが実現する処理
- Interface Adapter: Controller、Presenter、Gatewayなど、外側との変換
- Framework / Driver: DB、Webフレームワーク、UI、外部サービスなど

依存の向きは、外側から内側へ向かうようにします。
内側のビジネスルールが、特定のDBやWebフレームワークに直接依存しないようにします。

## 業務システムでの意味

業務システムでは、DB、画面、API、外部連携などが先に見えやすいです。
しかし本当に重要なのは、業務上のルールです。

たとえば決済や金融の処理では、次のようなルールが重要になります。

- どの条件で処理を受け付けるか
- 二重処理をどう防ぐか
- エラー時にどこまで戻すか
- 再実行して安全か
- 監査ログをどこで残すか

クリーンアーキテクチャは、こうした業務ルールをフレームワークやDBから切り離して考えるための見方になります。

## 利点

- 業務ルールを中心に整理しやすい
- テストしやすくなる
- DBやUIの変更に強くなる
- 責務が分かれやすい
- 大きくなったコードを読みやすくしやすい

## 注意点

小さい個人開発や単純なCRUDでは、最初から厳密に分けすぎると重くなります。

クリーンアーキテクチャは、形だけ真似るより、依存の向きと責務分離を理解することが重要です。

## 見るときの観点

- 業務ルールがどこに書かれているか
- Controllerに処理を書きすぎていないか
- DB操作と業務判断が混ざりすぎていないか
- テストしたい処理がDBや画面なしで確認できるか
- 外側の技術変更に内側のルールが引きずられていないか

## 関連する概念

- レイヤードアーキテクチャ
- 依存性逆転
- ユースケース
- Entity
- Repository
- Controller
- Service
- DTO
- MVC

## 参考文献

- Robert C. Martin: Clean Architecture
- The Clean Architecture - blog post by Robert C. Martin
