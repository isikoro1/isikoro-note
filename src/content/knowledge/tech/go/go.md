---
title: "Go"
summary: "シンプルな構文、並行処理、単一バイナリ配布に特徴があるプログラミング言語。"
category: "Tech"
type: "language"
status: "draft"
created: "2026-07-17"
updated: "2026-07-17"
tags: ["Go", "Backend", "CLI", "Concurrency"]
aliases: ["Golang", "Go言語"]
keywords:
  - goroutine
  - channel
  - package
  - module
  - interface
  - error handling
  - CLI
  - backend
history:
  - date: "2026-07-17"
    text: "初版作成"
related:
  - title: "Python"
    slug: "tech/python/python"
  - title: "Java"
    slug: "tech/java/java"
---

## 概要

Go は、シンプルな構文と実行ファイルの配布しやすさに特徴があるプログラミング言語です。
Web API、CLIツール、インフラ系ツール、バックエンドサービスなどで使われます。

## 内容

Go を見るときは、まず次の点を押さえます。

- 構文が比較的少ない
- コンパイルして単一バイナリにしやすい
- `goroutine` と `channel` で並行処理を書ける
- 例外ではなく戻り値でエラーを扱う
- interface を使って依存を差し替えやすい

## 学ぶ観点

個人開発では、CLIツールや小さなWeb APIを作ると理解しやすいです。
業務では、API、バッチ、インフラ補助ツール、マイクロサービス系の文脈で出てくることがあります。

## 関連する概念

- goroutine
- channel
- module
- package
- interface
- error handling
- HTTP server

## 参考文献

- Go Documentation
- Effective Go
