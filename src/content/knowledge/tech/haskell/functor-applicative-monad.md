---
title: "HaskellのFunctor・Applicative・Monad"
summary: "文脈を持つ値へ関数を適用し、独立した計算や依存する計算を組み合わせる抽象化を比較する。"
category: "Tech"
type: "language-guide"
status: "draft"
created: "2026-08-03"
updated: "2026-08-03"
parent: "tech/haskell/haskell"
tags: ["Haskell", "Functor", "Applicative", "Monad"]
aliases: ["Haskellのモナド", "Functor", "Applicative", "Monad"]
keywords:
  - fmap
  - applicative
  - bind
  - monad
  - context
history:
  - date: "2026-08-03"
    text: "初版作成"
related:
  - title: "Haskell"
    slug: "tech/haskell/haskell"
  - title: "Haskellの純粋関数とIO"
    slug: "tech/haskell/purity-and-io"
  - title: "Haskellの代数的データ型とパターンマッチ"
    slug: "tech/haskell/algebraic-data-types"
---

## 概要

Functor、Applicative、Monadは、`Maybe`、`Either`、リスト、`IO`など、追加の文脈を持つ値を組み合わせるための抽象化です。

モナドを特殊な容器として暗記するより、通常の関数を「失敗するかもしれない値」や「IOを伴う値」にどう適用するか、という問題から見ると理解しやすくなります。

## 前提となる例

通常の関数があるとします。

```haskell
addTax :: Int -> Int
addTax price = price * 110 `div` 100
```

普通の`Int`にはそのまま適用できます。

```haskell
addTax 1000
```

一方、`Maybe Int`は値がない可能性を含むため、通常の関数適用だけでは扱えません。

## Functor：文脈を保ったまま変換する

`fmap`は、文脈の中の値に関数を適用します。

```haskell
fmap addTax (Just 1000) -- Just 1100
fmap addTax Nothing     -- Nothing
```

型の形は次のとおりです。

```haskell
fmap :: Functor f => (a -> b) -> f a -> f b
```

`Maybe`という文脈はそのままに、中の`a`だけを`b`へ変換します。

## Applicative：独立した文脈を組み合わせる

2つの`Maybe`から値を作る場合は、Applicativeを使えます。

```haskell
data User = User String Int

makeUser :: Maybe String -> Maybe Int -> Maybe User
makeUser name age = User <$> name <*> age
```

名前か年齢のどちらかが`Nothing`なら、結果も`Nothing`です。

各入力は互いの結果に依存せず、最初から必要な計算の形が決まっています。フォームの複数項目を検証して結果を組み立てるような場面と相性があります。

## Monad：前の結果で次の処理を決める

次の処理が前の結果に依存する場合は、Monadの連結が必要になります。

```haskell
parseAge :: String -> Maybe Int
parseAge text =
  case reads text of
    [(age, "")] -> Just age
    _           -> Nothing

validateAge :: Int -> Maybe Int
validateAge age
  | age >= 18 = Just age
  | otherwise = Nothing

adultAge :: String -> Maybe Int
adultAge text = do
  age <- parseAge text
  validateAge age
```

`parseAge`が失敗すれば後続処理は行われません。成功した場合だけ、その結果`age`を使って次の計算を選びます。

中心となる演算`>>=`の形は次のとおりです。

```haskell
(>>=) :: Monad m => m a -> (a -> m b) -> m b
```

文脈を持つ値`m a`と、その中身を受け取って次の文脈`m b`を返す関数をつなぎます。

## 3つの違い

| 抽象化 | できること | 次の処理 |
| --- | --- | --- |
| Functor | 文脈内の値を変換する | 元の値には依存しない変換 |
| Applicative | 複数の独立した文脈を組み合わせる | 全体の形を先に決められる |
| Monad | 文脈を持つ処理を順番につなぐ | 前の結果で次を選べる |

MonadはApplicativeより常に優れた書き方という意味ではありません。依存関係がない処理をApplicativeで表すと、処理構造が型とコードに現れます。

## IOも同じ仕組みでつなぐ

`do`記法はIO専用ではありません。`Maybe`や`Either`など、Monadの処理を順番につなぐ構文です。

```haskell
main :: IO ()
main = do
  name <- getLine
  putStrLn ("こんにちは、" ++ name)
```

前のIOで得た値を次のIOで使うため、Monadとして連結されています。IOそのものを「モナドの正体」と考えるより、IOがMonadの実例の一つだと捉えます。

## 理解するときの注意

- 「箱」という比喩だけで終わらせず、型シグネチャを見る
- `Maybe`、`Either`、`IO`で同じ操作を比較する
- `do`記法を魔法扱いせず、処理の依存関係を見る
- Monad則は、処理を組み替えても意味が崩れないための規則として学ぶ
- 抽象化を先に覚えるより、重複した組み合わせ処理から必要性を確認する

## 参考資料

- [HaskellWiki: Monad](https://www.haskell.org/haskellwiki/Monad)
- [HaskellWiki: All About Monads](https://www.haskell.org/haskellwiki/All_About_Monads)
