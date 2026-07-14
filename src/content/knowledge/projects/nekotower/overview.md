---
title: "ねこタワー"
summary: "個人開発ゲーム『ねこタワー』に関する技術・設計・実装メモ。"
category: "Project"
type: "project"
status: "draft"
created: "2026-07-12"
updated: "2026-07-14"
keywords:
  - p5.js
  - JavaScript
  - ゲームループ
  - 衝突判定
  - 状態管理
  - オンライン対戦
  - リアルタイム通信
  - GitHub Pages
  - 個人開発
tags: ["ねこタワー", "個人開発", "ゲーム", "p5.js"]
aliases: ["nekotower", "猫タワー"]
history:
  - date: "2026-07-12"
    text: "初版作成"
  - date: "2026-07-14"
    text: "公開URL、リポジトリ、子ページ一覧、オンライン技術の整理を追加"
related:
  - title: "ねこタワー / ゲームループ"
    slug: "projects/nekotower/game-loop"
  - title: "ねこタワー / オンライン技術"
    slug: "projects/nekotower/online-tech"
  - title: "TCP/IP"
    slug: "tech/network/tcp-ip"
  - title: "REST API"
    slug: "tech/web/rest-api"
---

## 概要

ねこタワーは、個人開発したブラウザゲームプロジェクトです。
このページでは、ソースコードそのものではなく、設計判断、実装上の詰まりどころ、使った技術、改善案を整理します。

## URL

- 公開ページ: [nekotower.isikoro.dev](https://nekotower.isikoro.dev/)
- GitHub Pages: [isikoro1.github.io/nekotower](https://isikoro1.github.io/nekotower/)
- GitHub リポジトリ: [isikoro1/nekotower](https://github.com/isikoro1/nekotower)

## 内容

ソースコードは GitHub リポジトリで管理し、技術的な説明や振り返りはこの技術マップに置きます。

分け方は次の通りです。

- GitHub: 実際のソースコード、コミット履歴、Issue
- 技術マップ: 技術選定、実装メモ、設計判断、改善案
- 公開ページ: 実際に動く成果物
- YouTube等: 作業配信や解説動画のアーカイブ

## 子ページ

- [ねこタワー / ゲームループ](/isikoro-note/knowledge/projects/nekotower/game-loop/)
- [ねこタワー / オンライン技術](/isikoro-note/knowledge/projects/nekotower/online-tech/)

## 主要技術

- p5.js
- JavaScript
- GitHub Pages
- Cloudflare
- ブラウザゲーム
- オンライン対戦

## オンライン技術で見る観点

オンライン対戦を扱う場合、単に画面を同期するだけではなく、通信の遅延や状態の食い違いを考える必要があります。

見る観点は次の通りです。

- プレイヤーの入力をどう送るか
- ゲーム状態をどこで正とするか
- 通信遅延があるときにどう見せるか
- 切断や再接続をどう扱うか
- 勝敗判定をどちらの環境で行うか
- チートや改ざんをどこまで考えるか

## 今後整理する項目

- オブジェクト管理
- 入力処理
- 当たり判定
- オンライン対戦の仕組み
- 状態同期
- 通信遅延
- AIを使った実装・修正ログ
