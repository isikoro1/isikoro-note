---
title: "React"
summary: "UIをコンポーネント単位で作るためのJavaScriptライブラリ。状態に応じて画面を更新するWebアプリでよく使われる。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-17"
updated: "2026-07-19"
tags: ["React", "JavaScript", "TypeScript", "Frontend"]
aliases: ["React.js", "リアクト"]
keywords:
  - React
  - component
  - props
  - state
  - hooks
  - useState
  - useEffect
  - JSX
  - TypeScript
history:
  - date: "2026-07-17"
    text: "初版作成"
  - date: "2026-07-17"
    text: "Astroとの比較を削除し、React自体の学習観点に整理"
  - date: "2026-07-19"
    text: "React学習用の子ページへの入口を追加"
related:
  - title: "TypeScript"
    slug: "tech/typescript/typescript"
  - title: "Reactのコンポーネント"
    slug: "tech/frontend/react-component"
  - title: "Reactの非同期処理"
    slug: "tech/frontend/react-async"
---

## 概要

React は、画面をコンポーネントという単位に分けて作るための JavaScript ライブラリです。
入力内容、クリック、APIから取得したデータなど、状態に応じて画面が変わるWebアプリでよく使われます。

HTMLを直接書き換えるというより、状態をもとに画面を組み立てる考え方が中心です。
そのため、ユーザー操作が多い画面や、データ取得後に表示内容が変わる画面で力を発揮します。

## 学習入口

React を学ぶときは、最初から大きなアプリを作るより、画面の部品化と状態管理を理解するのが重要です。

まずは次の概念から見ると分かりやすいです。

- [Reactのコンポーネント](/isikoro-note/knowledge/tech/frontend/react-component/)
- [Reactのprops](/isikoro-note/knowledge/tech/frontend/react-props/)
- [Reactのstate](/isikoro-note/knowledge/tech/frontend/react-state/)
- [Reactのhooks](/isikoro-note/knowledge/tech/frontend/react-hooks/)
- [Reactの非同期処理](/isikoro-note/knowledge/tech/frontend/react-async/)

## 使われやすい場面

React は、次のような画面で使われやすいです。

- 入力フォームが多い画面
- 検索や絞り込みがある画面
- APIから取得したデータを一覧表示する画面
- ボタン操作で表示内容が変わる画面
- ダッシュボードのように複数の状態を扱う画面

静的な文章ページだけなら、React を使わなくても十分なことがあります。
React は、画面の状態が増えてきたときに使うと価値が出やすいです。

## 学習で見る観点

- 画面を部品として分けられるか
- props と state の違いを説明できるか
- 状態が変わると画面が再描画される流れを理解できるか
- useEffect を使いすぎていないか
- TypeScriptでpropsやstateの型を付けられるか

## 関連する概念

- Component
- props
- state
- hooks
- JSX
- SPA
- TypeScript
- Vite
