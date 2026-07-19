---
title: "Reactの非同期処理"
summary: "API取得やローディング、エラー処理など、Reactで非同期に扱う処理の整理。"
category: "Tech"
type: "react"
status: "draft"
created: "2026-07-19"
updated: "2026-07-19"
tags: ["React", "Async", "API", "useEffect"]
aliases: ["React async", "非同期処理", "ReactのAPI取得"]
keywords:
  - React
  - async
  - await
  - API
  - fetch
  - useEffect
history:
  - date: "2026-07-19"
    text: "初版作成"
related:
  - title: "React"
    slug: "tech/frontend/react"
  - title: "Reactのhooks"
    slug: "tech/frontend/react-hooks"
  - title: "REST API"
    slug: "tech/web/rest-api"
---

## 概要

Reactの非同期処理では、APIからデータを取得し、その結果に応じて画面を更新します。

代表的には、`fetch` や `async / await` を使ってデータを取得し、取得した結果をstateに入れて表示します。

## 扱う状態

非同期処理では、取得したデータだけでなく、処理中や失敗時の状態も扱います。

- data: 取得したデータ
- loading: 読み込み中かどうか
- error: エラーがあるかどうか

この3つを分けて持つと、画面の状態を整理しやすくなります。

## 注意点

非同期処理は、画面表示とタイミングがずれます。

そのため、取得前、取得中、取得成功、取得失敗の状態を考える必要があります。

また、`useEffect` の中でAPI取得を書く場合、依存配列によって実行タイミングが変わるため、意図しない再取得に注意します。

## メモ

最初は、ボタンを押したらAPIを呼ぶ処理と、画面表示時にAPIを呼ぶ処理を分けて理解すると分かりやすいです。
