---
title: "Haskellの遅延評価"
summary: "値が必要になるまで式を評価しない仕組みと、無限リスト、短絡、メモリ使用量の注意点を整理する。"
category: "Tech"
type: "language-guide"
status: "draft"
created: "2026-08-03"
updated: "2026-08-03"
parent: "tech/haskell/haskell"
tags: ["Haskell", "Lazy Evaluation", "Performance"]
aliases: ["遅延評価", "Haskellの正格評価"]
keywords:
  - lazy evaluation
  - thunk
  - strictness
  - infinite list
history:
  - date: "2026-08-03"
    text: "初版作成"
related:
  - title: "Haskell"
    slug: "tech/haskell/haskell"
  - title: "Haskellの純粋関数とIO"
    slug: "tech/haskell/purity-and-io"
---

## 概要

Haskellは、式の結果が必要になるまで評価を遅らせる非正格な評価を基本とします。同じ計算が必要になった場合は、評価した結果が共有されます。

遅延評価によって、データを生成する処理と消費する処理を分離しやすくなります。一方で、いつ計算され、どれだけメモリに残るかが見えにくくなる面もあります。

## 必要な分だけ評価する

次の式は、先頭の3件だけを要求します。

```haskell
result :: [Int]
result = take 3 (map (* 2) [1..])
```

`[1..]`は終わりのないリストですが、`take 3`が必要とする範囲だけ生成・変換されるため、結果は`[2, 4, 6]`になります。

無限データをすべて作ってから処理しているわけではありません。生成側と利用側が、必要な分だけ進みます。

## 短絡評価

論理演算でも、結果に不要な式は評価されません。

```haskell
safe :: Bool
safe = False && error "評価されない"
```

左辺が`False`で結果が確定するため、右辺は評価されません。

この性質は便利ですが、「評価されないから問題が表面化しない」こともあります。未定義値や部分関数に依存する設計を正当化するものではありません。

## thunk

まだ評価されていない式は、後で計算するための情報として保持されます。一般にthunkと呼ばれます。

thunkが大量に積み上がると、最終的な値は小さくてもメモリを多く使うことがあります。

```haskell
sumLazy :: [Int] -> Int
sumLazy = foldl (+) 0
```

長いリストに`foldl`を使うと、加算をすぐ完了せず、計算の連鎖を保持する場合があります。合計だけが必要なら、`Data.List`の`foldl'`など、途中結果をより積極的に評価する関数を検討します。

```haskell
import Data.List (foldl')

sumStrict :: [Int] -> Int
sumStrict = foldl' (+) 0
```

ただし「遅延は危険だからすべて正格にする」も適切ではありません。データ生成と消費の関係、保持される参照、実際のプロファイルを見て判断します。

## 正規形の違い

値の外側だけ分かる状態と、内部まで評価された状態は異なります。

例えばリストが空かどうかを判断するには、先頭のコンストラクタまで評価すれば足ります。各要素の計算までは必要ありません。

`seq`やBangPatternsなどで評価を促せますが、どの深さまで評価されるかを理解せずに使うと、期待したメモリ改善にならないことがあります。

## 遅延IOへの注意

遅延評価とファイルIOを組み合わせると、ファイルを閉じたと思った後に内容が要求されたり、リソースの解放時期が分かりにくくなったりします。

大きなファイルやストリームを扱う場合は、リソースの取得と解放が明確なAPIやストリーミングライブラリを選びます。純粋なリストのように見えることだけを理由に、遅延IOを無条件で使わない方が安全です。

## 実装で見る観点

- 無限または大きなデータから必要な分だけ消費できているか
- thunkが積み上がっていないか
- `foldl`と`foldl'`の選択が用途に合っているか
- 評価されない式にエラーを隠していないか
- ファイルや通信などのリソース寿命が明確か
- 推測だけで最適化せず、プロファイラで確認したか

遅延評価は「処理が遅い」という意味ではありません。評価時期を、式を定義した時点ではなく結果が要求された時点まで遅らせる戦略です。

## 参考資料

- [HaskellWiki: Lazy evaluation](https://www.haskell.org/haskellwiki/Lazy_evaluation)
- [GHC User's Guide](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/)
