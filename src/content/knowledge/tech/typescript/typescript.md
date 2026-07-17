---
title: "TypeScript"
summary: "JavaScriptに静的型付けを加え、コードの意図やデータ構造を明確にしやすくするプログラミング言語。"
category: "Tech"
type: "language"
status: "draft"
created: "2026-07-17"
updated: "2026-07-17"
tags: ["TypeScript", "JavaScript", "Frontend", "Astro", "React"]
aliases: ["タイプスクリプト", "TS"]
keywords:
  - static typing
  - type annotation
  - interface
  - type alias
  - generics
  - union type
  - React
  - Astro
history:
  - date: "2026-07-17"
    text: "初版作成"
related:
  - title: "React"
    slug: "tech/frontend/react"
  - title: "Astro"
    slug: "tech/frontend/astro"
  - title: "サイト内検索"
    slug: "tech/frontend/site-search"
---

## 概要

TypeScriptは、JavaScriptに型の仕組みを加えた言語です。
実行時にはJavaScriptへ変換されますが、開発中に型チェックを行えるため、値の形や関数の使い方を間違えにくくなります。

React、Astro、Next.jsなど、現代のフロントエンド開発ではかなりよく使われます。

## 内容

JavaScriptだけでもWebアプリは作れます。
ただし、規模が大きくなると、次のような問題が出やすくなります。

- 関数に何を渡せばよいか分かりにくい
- APIレスポンスの形が曖昧になる
- オブジェクトのプロパティ名を間違える
- null や undefined の扱いでバグが出る
- コンポーネントの props が分かりにくい

TypeScriptは、こうした情報を型としてコード上に残します。

```ts
type User = {
  id: number;
  name: string;
};

function formatUser(user: User) {
  return `${user.id}: ${user.name}`;
}
```

この場合、`formatUser` に渡す値は `id` と `name` を持つ必要があります。
型があることで、コードを読む人にも、エディタにも、期待されるデータ構造が伝わります。

## Reactとの関係

Reactでは、コンポーネントの props を型で表せます。

```tsx
type ButtonProps = {
  label: string;
  onClick: () => void;
};

function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
```

props の型があると、コンポーネントを使う側で渡し忘れや型の間違いに気づきやすくなります。

## Astroとの関係

Astroでも、コンポーネントやユーティリティ関数をTypeScriptで書けます。
このサイトでも、検索用JSONの生成や分類処理ではTypeScriptを使っています。

静的サイトでも、ページ数やfrontmatterが増えると、文字列だけで管理するのはつらくなります。
TypeScriptを使うと、ノートの構造や分類ロジックを少し安全に扱えます。

## 見るときの観点

TypeScriptを見るときは、文法だけでなく、次の観点で見ると理解しやすいです。

- どのデータ構造を型で表しているか
- 関数の入力と出力が明確になっているか
- Reactの props をどう表しているか
- APIレスポンスやfrontmatterの形をどう扱っているか
- 型が複雑になりすぎていないか

## 関連する概念

- JavaScript
- React
- Astro
- 静的型付け
- 型推論
- interface
- type alias
- generics

## 参考文献

- TypeScript Handbook
- React TypeScript Cheatsheet
- Astro Docs: TypeScript
