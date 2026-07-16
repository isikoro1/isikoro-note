---
title: "React"
summary: "UIをコンポーネント単位で作るためのJavaScriptライブラリ。状態に応じて画面を更新するWebアプリでよく使われる。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-17"
updated: "2026-07-17"
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
related:
  - title: "Astro"
    slug: "tech/frontend/astro"
  - title: "サイト内検索"
    slug: "tech/frontend/site-search"
---

## 概要

React は、画面をコンポーネントという単位に分けて作るための JavaScript ライブラリです。
入力内容、クリック、APIから取得したデータなど、状態に応じて画面が変わるWebアプリでよく使われます。

## 内容

React を学ぶときは、最初から大きなアプリを作るより、画面の部品化と状態管理を理解するのが重要です。

見る順番は次のようにすると分かりやすいです。

1. JSX
2. Component
3. props
4. state
5. event handler
6. useState
7. useEffect
8. 条件付き表示
9. リスト表示
10. フォーム入力
11. API取得
12. TypeScriptとの組み合わせ

## Astroとの違い

Astro は、文章中心の静的サイトを軽く作る用途に向いています。
React は、ユーザー操作に応じて画面が大きく変わるWebアプリに向いています。

このサイトのようなノートサイトでは Astro が中心でよく、検索フォームや動的なUIが増えてきた部分だけ React を使う、という選び方もできます。

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
