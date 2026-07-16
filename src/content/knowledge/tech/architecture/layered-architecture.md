---
title: "レイヤードアーキテクチャ"
summary: "アプリケーションを役割ごとの層に分け、画面、業務処理、データアクセスなどの責務を整理する設計方法。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-14"
updated: "2026-07-14"
tags: ["Architecture", "Backend", "Design"]
aliases: ["Layered Architecture", "多層アーキテクチャ", "階層化アーキテクチャ"]
keywords:
  - presentation layer
  - application layer
  - domain layer
  - infrastructure layer
  - controller
  - service
  - repository
  - DAO
  - DTO
  - 責務分離
history:
  - date: "2026-07-14"
    text: "初版作成"
related:
  - title: "クリーンアーキテクチャ"
    slug: "tech/architecture/clean-architecture"
  - title: "MVC"
    slug: "tech/architecture/mvc"
  - title: "Java"
    slug: "tech/java/java"
---

## 概要

レイヤードアーキテクチャは、アプリケーションを役割ごとの層に分けて整理する設計方法です。

典型的には、画面やAPIを受ける層、業務処理を行う層、データベースへアクセスする層に分けます。

## 内容

よくある分け方は次の通りです。

- Presentation Layer: 画面、Controller、APIの入口
- Application / Service Layer: ユースケースや業務処理の流れ
- Domain Layer: 業務上のルールや概念
- Infrastructure / Data Access Layer: DB、外部API、ファイル、メールなど

Javaの業務システムでは、Controller、Service、DAO、DTO のような名前で分かれていることが多いです。

## 業務システムでの意味

レイヤードアーキテクチャは、業務システムでかなりよく見る考え方です。

たとえば、注文登録や決済処理のような機能では、次のように分けて考えられます。

- Controller: リクエストを受け取る
- Service: 業務処理を進める
- DAO / Repository: DBを読み書きする
- DTO: 画面やAPI、層の間で渡すデータを表す

この分け方により、画面の処理、業務判断、DB操作が一箇所に混ざりにくくなります。

## 利点

- 役割ごとにコードを分けやすい
- どこに何を書くか決めやすい
- 業務処理とDB処理を分けやすい
- Javaの業務システムと相性がよい
- 新人でも構造を追いやすい

## 注意点

層を分けても、実際には Service にすべての処理が集まりすぎることがあります。

また、Controller から DAO を直接呼ぶ、DAO に業務判断を書く、DTO が肥大化する、といった崩れ方も起きます。

形だけ層を作るのではなく、どの層が何を責任として持つのかを考える必要があります。

## クリーンアーキテクチャとの違い

レイヤードアーキテクチャは、比較的実装上の分け方として使われます。

一方、クリーンアーキテクチャは、依存の向きやビジネスルールの独立性をより強く意識します。

ただし、両者は対立するものではありません。
レイヤードアーキテクチャを整理していくと、クリーンアーキテクチャの考え方に近づく部分もあります。

## 見るときの観点

- Controllerに業務処理を書きすぎていないか
- Serviceに責務が集まりすぎていないか
- DAOやRepositoryに業務判断が入っていないか
- DTOが単なるデータ受け渡し以上の責務を持っていないか
- 層をまたぐ依存関係が複雑になっていないか

## 関連する概念

- Controller
- Service
- DAO
- Repository
- DTO
- MVC
- クリーンアーキテクチャ
- 責務分離
- 依存性逆転

## 参考文献

- Martin Fowler: Patterns of Enterprise Application Architecture
- Robert C. Martin: Clean Architecture
