---
title: "Reactのコンポーネント"
summary: "Reactで画面を部品として分けるための基本単位。"
category: "Tech"
type: "react"
status: "draft"
created: "2026-07-19"
updated: "2026-07-19"
tags: ["React", "Component", "Frontend"]
aliases: ["コンポーネント", "React Component"]
keywords:
  - React
  - component
  - UI
  - JSX
history:
  - date: "2026-07-19"
    text: "初版作成"
related:
  - title: "React"
    slug: "tech/frontend/react"
  - title: "Reactのprops"
    slug: "tech/frontend/react-props"
  - title: "Reactのstate"
    slug: "tech/frontend/react-state"
---

## 概要

Reactのコンポーネントは、画面を部品として分けるための単位です。

ボタン、入力欄、一覧、カード、ページの一部などをコンポーネントとして分けることで、画面を小さな単位で考えられます。

## 考え方

コンポーネントは、受け取った値や内部の状態をもとに、どのようなUIを表示するかを決めます。

Reactでは、HTMLを直接操作するというより、データから画面を組み立てる考え方をします。

## 分ける基準

- 画面上で意味のあるまとまりになっているか
- 同じ見た目や振る舞いを再利用できるか
- 1つのコンポーネントが大きくなりすぎていないか
- propsで外から値を渡せる形になっているか

## メモ

最初から細かく分けすぎる必要はありません。

同じコードが増えてきたとき、説明しづらくなったとき、状態の扱いが複雑になったときに分けると考えやすいです。
