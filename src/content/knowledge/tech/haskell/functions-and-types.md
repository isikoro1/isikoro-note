---
title: "Haskellの関数と型"
summary: "関数定義、型シグネチャ、型推論、部分適用から、Haskellの基本的なコードの読み方を整理する。"
category: "Tech"
type: "language-guide"
status: "draft"
created: "2026-08-03"
updated: "2026-08-03"
parent: "tech/haskell/haskell"
tags: ["Haskell", "Function", "Type System"]
aliases: ["Haskellの型", "Haskellの関数"]
keywords:
  - type signature
  - type inference
  - currying
  - partial application
history:
  - date: "2026-08-03"
    text: "初版作成"
related:
  - title: "Haskell"
    slug: "tech/haskell/haskell"
  - title: "関数型プログラミング"
    slug: "tech/programming-paradigm/functional-programming"
  - title: "Haskellの代数的データ型とパターンマッチ"
    slug: "tech/haskell/algebraic-data-types"
---

## 概要

Haskellでは、処理を関数として表し、型で「何を受け取り、何を返すか」を明示します。

型はエラーを防ぐためだけの注釈ではありません。プログラムの設計を読み取り、実装の候補を絞るための情報として使われます。

## 関数定義

2つの整数を加算する関数は、次のように書けます。

```haskell
add :: Int -> Int -> Int
add x y = x + y
```

1行目が型シグネチャ、2行目が実装です。

`Int -> Int -> Int`は「2つのIntを同時に受け取る」と考えるより、次のように右から結合して読みます。

```text
Int -> (Int -> Int)
```

最初のIntを受け取ると、残りのIntを受け取る関数が返ります。

## 部分適用

Haskellの関数は基本的に、引数を1つずつ受け取ります。そのため、引数の一部だけを渡して新しい関数を作れます。

```haskell
addTax :: Double -> Double
addTax = (*) 1.1

price :: Double
price = addTax 1000
```

`(*) 1.1`は、引数に1.1を掛ける関数です。このように既存の関数へ一部の引数だけを与えることを部分適用といいます。

設定値や共通条件を先に固定し、用途ごとの関数を作るときに使えます。

## 型推論

型シグネチャを省略しても、コンパイラは式から型を推論できます。

```haskell
double x = x * 2
```

ただし、公開する関数や重要な関数には型シグネチャを書く方が、意図を読み取りやすくなります。型シグネチャが先にあると、実装前に入力と出力の境界を考えられます。

## 型変数

次の関数は値の種類に依存しません。

```haskell
identity :: a -> a
identity x = x
```

`a`は特定の型ではなく型変数です。「どの型でも受け取れるが、入力と同じ型を返す」という制約を表します。

実装は型に従う必要があるため、`a -> a`から作れる普通の関数は、受け取った値をそのまま返す形に強く絞られます。型を見るだけで実装の性質を推測できる例です。

## 型クラス

同じ操作を複数の型で利用できることを、型クラスの制約で表します。

```haskell
same :: Eq a => a -> a -> Bool
same x y = x == y
```

`Eq a =>`は、型`a`が等価比較を提供していることを要求します。

Javaのinterfaceと似た用途がありますが、既存の型に後から振る舞いを定義できる点や、値ではなく型に対する制約として現れる点を含め、同じものではありません。

## Haskellのコードを読む順序

1. 型シグネチャで入力と出力を確認する
2. 型変数と型クラス制約を確認する
3. 引数がどこまで部分適用されているかを見る
4. 関数合成や高階関数を、小さい関数へ分解して読む
5. 最後に具体的な値を当てはめる

Haskellでは、実装を上から一文字ずつ追うより、型から処理の境界をつかむ方が読みやすい場合があります。

## 参考資料

- [Haskell.org: A Gentle Introduction to Haskell - Values, Types, and Other Goodies](https://www.haskell.org/tutorial/goodies.html)
- [Haskell.org](https://www.haskell.org/)
