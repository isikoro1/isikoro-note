---
title: "Haskell"
summary: "純粋関数、強い静的型付け、遅延評価を通じて、データと作用を分けて設計するプログラミング言語。"
category: "Tech"
type: "language"
status: "draft"
created: "2026-07-17"
updated: "2026-08-03"
tags: ["Haskell", "Functional Programming", "Type System"]
aliases: ["ハスケル", "純粋関数型言語"]
keywords:
  - functional programming
  - pure function
  - type inference
  - lazy evaluation
  - monad
  - immutability
  - algebraic data type
history:
  - date: "2026-08-03"
    text: "親ページを再構成し、型、代数的データ型、IO、遅延評価、Monadの子ページを追加"
  - date: "2026-07-17"
    text: "初版作成"
related:
  - title: "関数型プログラミング"
    slug: "tech/programming-paradigm/functional-programming"
  - title: "Clojure"
    slug: "tech/clojure/clojure"
  - title: "状態遷移"
    slug: "tech/architecture/state-transition"
  - title: "ドメインモデル"
    slug: "tech/architecture/domain-model"
---

## 概要

Haskellは、純粋関数型プログラミングを中心に設計された、強い静的型付けを持つ言語です。

関数やデータ変換を中心に処理を組み立て、外部への作用は`IO`などの型によって純粋な計算から分けます。遅延評価、代数的データ型、型クラスといった特徴が互いに結び付いています。

Haskellを学ぶ価値は、独特な構文を覚えることだけではありません。データの状態を型で表すこと、作用の境界を決めること、関数同士の依存関係を見ることを通じて、ほかの言語でも使える設計の見方を身につけられます。

## 主な特徴

| 特徴 | 何が変わるか |
| --- | --- |
| 純粋関数 | 入力と出力の関係を追いやすくなる |
| 強い静的型付け | 不正な状態や処理の組み合わせを早い段階で検出できる |
| 型推論 | 多くの型をコンパイラが推論しつつ、型安全性を維持する |
| 代数的データ型 | 状態や成功・失敗をデータの形として表せる |
| 遅延評価 | 必要になった値だけを評価し、生成と消費を分離できる |
| 型クラス | 複数の型に共通する操作を抽象化できる |
| IOによる作用の分離 | 外部とのやり取りが型に現れる |

## 小さな例

```haskell
data PaymentStatus
  = Pending
  | Authorized
  | Captured
  | Failed String

displayStatus :: PaymentStatus -> String
displayStatus Pending         = "処理待ち"
displayStatus Authorized      = "承認済み"
displayStatus Captured        = "売上確定"
displayStatus (Failed reason) = "失敗: " ++ reason
```

この例では、決済状態を自由な文字列ではなく、取り得る値が決まった型として表しています。処理側はパターンマッチによって各状態を扱います。

Haskellの設計は「命令をどの順番で実行するか」より、「どのようなデータがあり、それをどの関数で別のデータへ変換するか」から考える傾向があります。

## 子ページ

- [Haskellの関数と型](/isikoro-note/knowledge/tech/haskell/functions-and-types/)
- [Haskellの代数的データ型とパターンマッチ](/isikoro-note/knowledge/tech/haskell/algebraic-data-types/)
- [Haskellの純粋関数とIO](/isikoro-note/knowledge/tech/haskell/purity-and-io/)
- [Haskellの遅延評価](/isikoro-note/knowledge/tech/haskell/lazy-evaluation/)
- [HaskellのFunctor・Applicative・Monad](/isikoro-note/knowledge/tech/haskell/functor-applicative-monad/)

## 学ぶ順序

1. 関数定義と型シグネチャを読む
2. 部分適用、高階関数、型変数を理解する
3. 代数的データ型とパターンマッチでデータを表す
4. `Maybe`と`Either`で不在や失敗を扱う
5. 純粋な計算と`IO`の境界を見る
6. 遅延評価と正格評価の違いを確認する
7. Functor、Applicative、Monadを処理の組み合わせとして理解する

Monadから始めると抽象論になりやすいため、まず`Maybe`や`Either`を使った小さな処理を作り、組み合わせの重複が何によって解消されるかを見る方が理解しやすくなります。

## 他の言語へ持ち帰れること

Haskellを実務で直接使わない場合でも、次の考え方はJava、TypeScript、Goなどで応用できます。

- 値がない可能性を型に含める
- 状態を文字列やBoolの組み合わせだけで表さない
- 副作用をアプリケーションの境界へ寄せる
- 小さな純粋関数として業務判断を切り出す
- 入力と出力の型から責務を確認する
- 例外にする失敗と戻り値で扱う失敗を分ける

Javaのsealed classやrecord、TypeScriptのdiscriminated unionなどを見ると、Haskellの代数的データ型に近い設計を他言語でどう表すか比較できます。

## 難しさ

Haskellには、学び始めに混乱しやすい点もあります。

- 遅延評価によって実行時の性能を予測しにくいことがある
- 型エラーが長くなり、原因を読み取るまで時間がかかる
- 型クラスやMonadを抽象的な説明だけで学ぶと用途を見失いやすい
- GHC拡張を含めると、同じHaskellでも利用する機能がプロジェクトごとに異なる
- ライブラリ選定やビルドツールなど、言語外の学習も必要になる

型を高度にすること自体を目的にせず、データや処理の制約を明確にするために必要な範囲で使うことが重要です。

## 参考資料

- [Haskell.org](https://www.haskell.org/)
- [GHC User's Guide](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/)
- [A Gentle Introduction to Haskell](https://www.haskell.org/tutorial/)
