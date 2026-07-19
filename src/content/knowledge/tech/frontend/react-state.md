---
title: "Reactのstate"
summary: "コンポーネントが持つ状態。状態が変わると画面の表示も変わる。"
category: "Tech"
type: "react"
status: "draft"
created: "2026-07-19"
updated: "2026-07-19"
tags: ["React", "state", "useState"]
aliases: ["state", "状態", "React state"]
keywords:
  - React
  - state
  - useState
  - rendering
history:
  - date: "2026-07-19"
    text: "初版作成"
related:
  - title: "React"
    slug: "tech/frontend/react"
  - title: "Reactのprops"
    slug: "tech/frontend/react-props"
  - title: "Reactのhooks"
    slug: "tech/frontend/react-hooks"
---

## 概要

stateは、コンポーネントが持つ状態です。

入力中の文字、開閉状態、選択中の項目、取得したデータなど、画面の表示に影響する値を扱います。

## 考え方

Reactでは、stateが変わると、そのstateを使っているコンポーネントが再描画されます。

つまり、画面を直接書き換えるのではなく、stateを変更することで画面を変えます。

## 例

- 入力フォームの値
- モーダルを開いているかどうか
- ローディング中かどうか
- APIから取得した一覧データ
- エラー表示の有無

## propsとの違い

propsは親から渡される値です。

stateはコンポーネント自身が持つ値です。

どこでstateを持つかは、Reactの設計で迷いやすいポイントです。複数のコンポーネントで同じ値を使うなら、共通の親にstateを持たせることがあります。
