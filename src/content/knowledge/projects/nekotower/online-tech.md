---
title: "ねこタワー / オンライン技術"
summary: "ねこタワーのオンライン対戦を考えるための通信、状態同期、遅延、切断対応に関する技術メモ。"
category: "Project"
type: "project-note"
status: "draft"
created: "2026-07-14"
updated: "2026-07-14"
tags: ["ねこタワー", "オンライン対戦", "Network", "Game", "JavaScript"]
aliases: ["オンライン対戦", "リアルタイム通信", "状態同期", "NekoTower Online"]
keywords:
  - online multiplayer
  - realtime communication
  - state sync
  - latency
  - reconnect
  - room
  - matchmaking
  - WebSocket
  - Firebase
  - authority
  - prediction
  - conflict
history:
  - date: "2026-07-14"
    text: "初版作成"
related:
  - title: "ねこタワー"
    slug: "projects/nekotower/overview"
  - title: "ねこタワー / ゲームループ"
    slug: "projects/nekotower/game-loop"
  - title: "TCP/IP"
    slug: "tech/network/tcp-ip"
  - title: "REST API"
    slug: "tech/web/rest-api"
  - title: "タイムアウト"
    slug: "tech/architecture/timeout"
  - title: "リトライ"
    slug: "tech/architecture/retry"
---

## 概要

ねこタワーのオンライン技術では、複数のプレイヤーが同じゲーム状態を見ながら操作できるようにする仕組みを扱います。

ローカルゲームでは、入力、状態更新、描画が同じ端末内で完結します。
オンライン対戦では、相手の入力やゲーム状態をネットワーク越しに受け取るため、通信遅延、切断、状態の不一致を考える必要があります。

## 内容

オンライン対戦で考える対象は、大きく分けると次の通りです。

- ルーム作成
- プレイヤー参加
- 入力送信
- 状態同期
- 勝敗判定
- 切断処理
- 再接続
- 観戦やログ保存

小さな個人開発では、最初から本格的なゲームサーバーを作るより、Firebase や WebSocket などを使って、最小限の同期から作る方が現実的です。

## 状態同期

オンライン対戦で難しいのは、各プレイヤーの画面に表示される状態をどう揃えるかです。

考え方は主に次の2つです。

- 入力を同期する
- ゲーム状態を同期する

入力同期では、各プレイヤーの操作だけを送り、各端末で同じ計算を行います。
ゲーム状態同期では、位置、スコア、勝敗などの状態を共有します。

ねこタワーのようなゲームでは、まずはゲーム状態をシンプルに共有し、必要になったら入力同期や補正を考える形が扱いやすいです。

## 遅延と見た目

ネットワーク越しの通信には遅延があります。
そのため、相手の操作が少し遅れて見えたり、画面上の状態が一瞬ずれたりします。

見る観点は次の通りです。

- 遅延してもゲームとして成立するか
- 相手の状態をどの頻度で反映するか
- ずれた状態を急に戻すのか、なめらかに補正するのか
- 勝敗判定がずれたときにどちらを正とするか

## 正とする場所

オンラインゲームでは、どの環境の状態を正しいものとして扱うかが重要です。

- 自分のブラウザを正とする
- 相手のブラウザを正とする
- サーバーや共有DB上の状態を正とする

公平性や改ざん防止を考えるなら、クライアントだけを信用しすぎない設計が必要になります。
ただし個人開発の初期段階では、まず動く同期を作り、必要に応じて正とする場所を見直す方が進めやすいです。

## 見るときの観点

- 何を送信しているか
- いつ送信しているか
- どこに保存しているか
- どの状態を正とするか
- 通信が遅いときにどう見えるか
- 切断されたときにどう扱うか
- 不正操作をどこまで防ぐか

## 関連する概念

- WebSocket
- Firebase
- 状態同期
- レイテンシ
- タイムアウト
- リトライ
- ルーム管理
- マッチング
- クライアント権威
- サーバー権威

## 参考文献

- ねこタワーの実装リポジトリ
- MDN Web Docs: WebSocket
- Firebase Documentation

## 外部リンク

- [isikoro1/nekotower](https://github.com/isikoro1/nekotower)
- [nekotower.isikoro.dev](https://nekotower.isikoro.dev/)
