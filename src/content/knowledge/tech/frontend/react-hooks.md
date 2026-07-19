---
title: "Reactのhooks"
summary: "関数コンポーネントで状態や副作用などを扱うための仕組み。"
category: "Tech"
type: "react"
status: "draft"
created: "2026-07-19"
updated: "2026-07-19"
tags: ["React", "hooks", "useState", "useEffect"]
aliases: ["hooks", "React Hooks", "フック"]
keywords:
  - React
  - hooks
  - useState
  - useEffect
history:
  - date: "2026-07-19"
    text: "初版作成"
related:
  - title: "React"
    slug: "tech/frontend/react"
  - title: "Reactのstate"
    slug: "tech/frontend/react-state"
  - title: "Reactの非同期処理"
    slug: "tech/frontend/react-async"
---

## 概要

hooksは、Reactの関数コンポーネントで状態や副作用などを扱うための仕組みです。

代表的なものに、状態を扱う `useState` と、副作用を扱う `useEffect` があります。

## よく使うhooks

- `useState`: コンポーネントの状態を持つ
- `useEffect`: データ取得、購読、外部への反映などの副作用を扱う
- `useMemo`: 計算結果を再利用する
- `useCallback`: 関数を再利用する
- `useRef`: DOMや値への参照を持つ

## 注意点

hooksは便利ですが、使いすぎると処理の流れが追いにくくなります。

特に `useEffect` に何でも入れると、いつ何が実行されるのか分かりづらくなります。

## メモ

Reactを学ぶ初期段階では、まず `useState` と `useEffect` を理解すれば十分です。

その後、パフォーマンスや再レンダリングで困ったときに、`useMemo` や `useCallback` を見ればよいです。
