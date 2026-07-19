---
title: "Reactのprops"
summary: "親コンポーネントから子コンポーネントへ値を渡すための仕組み。"
category: "Tech"
type: "react"
status: "draft"
created: "2026-07-19"
updated: "2026-07-19"
tags: ["React", "props", "Component"]
aliases: ["props", "プロップス", "React props"]
keywords:
  - React
  - props
  - component
  - TypeScript
history:
  - date: "2026-07-19"
    text: "初版作成"
related:
  - title: "React"
    slug: "tech/frontend/react"
  - title: "Reactのコンポーネント"
    slug: "tech/frontend/react-component"
  - title: "Reactのstate"
    slug: "tech/frontend/react-state"
---

## 概要

propsは、親コンポーネントから子コンポーネントへ値を渡すための仕組みです。

コンポーネントの外から値を受け取り、表示内容や振る舞いを変えるときに使います。

## 使いどころ

- 表示する文字列を外から渡す
- ボタンのラベルやクリック時の処理を渡す
- 一覧のデータを子コンポーネントに渡す
- 共通部品を再利用しやすくする

## stateとの違い

propsは外から渡される値です。

stateはコンポーネント自身が持つ状態です。

propsは基本的に子コンポーネント側で直接変更せず、変更したい場合は親側で状態を持ち、更新用の関数を渡します。

## メモ

TypeScriptを使う場合は、propsの型を明示すると、コンポーネントの使い方が分かりやすくなります。
