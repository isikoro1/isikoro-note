---
title: "Haskellの純粋関数とIO"
summary: "参照透過な計算と外部世界への作用を分け、IO型によって副作用を含む処理を組み立てる考え方。"
category: "Tech"
type: "language-guide"
status: "draft"
created: "2026-08-03"
updated: "2026-08-03"
parent: "tech/haskell/haskell"
tags: ["Haskell", "Pure Function", "IO"]
aliases: ["HaskellのIO", "Haskellの副作用", "純粋関数"]
keywords:
  - pure function
  - referential transparency
  - IO
  - side effect
history:
  - date: "2026-08-03"
    text: "初版作成"
related:
  - title: "Haskell"
    slug: "tech/haskell/haskell"
  - title: "HaskellのFunctor・Applicative・Monad"
    slug: "tech/haskell/functor-applicative-monad"
  - title: "関数型プログラミング"
    slug: "tech/programming-paradigm/functional-programming"
---

## 概要

Haskellでは、同じ入力に対して同じ値を返し、外部の状態を変えない関数と、入出力などの作用を持つ処理を型で分けます。

「副作用を使えない」のではありません。副作用を含む処理を`IO`という型に表し、純粋な計算との境界を明確にします。

## 純粋関数

次の関数は、引数だけで結果が決まります。

```haskell
calculateTax :: Int -> Int
calculateTax price = price * 10 `div` 100
```

どこで呼び出しても、同じ`price`には同じ結果を返します。式をその結果で置き換えてもプログラムの意味が変わらない性質を、参照透過性といいます。

参照透過な処理には、次の利点があります。

- 単体テストで外部環境を用意しなくてよい
- 呼び出し順序への依存が少ない
- 入力と出力だけを見て推論しやすい
- 関数を組み合わせやすい

## IOは値ではなく処理を表す

標準入力から文字列を読む`getLine`の型は、次のようになります。

```haskell
getLine :: IO String
```

これは通常の`String`ではなく、「実行されると文字列を得る入出力処理」です。

```haskell
main :: IO ()
main = do
  putStrLn "名前を入力してください"
  name <- getLine
  putStrLn ("こんにちは、" ++ name)
```

`<- `は、IO処理から得られた結果に名前を付けます。任意の`IO a`から純粋な`a`を取り出す一般的な関数はありません。これによって、外部状態に依存する値が純粋な処理へ紛れ込むのを防ぎます。

## Functional Core, Imperative Shell

実用的な設計では、外部とのやり取りを薄い層に寄せ、その内側を純粋な関数として作れます。

```haskell
formatGreeting :: String -> String
formatGreeting name = "こんにちは、" ++ name

main :: IO ()
main = do
  name <- getLine
  putStrLn (formatGreeting name)
```

`main`は入力と出力を担当し、文言の組み立ては純粋な`formatGreeting`が担当します。

Webアプリでも、HTTPやDBアクセスの結果を受け取る部分と、バリデーション、料金計算、状態遷移などの判断を分ける考え方に応用できます。

## IOの中ですべてを処理しない

IOを使えば通常のアプリケーションを作れますが、あらゆる関数を`IO`にすると、Haskellの利点が弱くなります。

次の境界を意識します。

- 現在時刻の取得、乱数、ファイル、DB、HTTPは外側
- 取得した値の検証、変換、計算は内側
- 外側から内側へ必要な値を引数として渡す
- 内側の結果を外側が保存・表示する

副作用の禁止ではなく、effect management、つまり作用をどこで扱うかの管理が中心です。

## 例外と想定内の失敗

ファイルが壊れている、入力値が不正であるといった想定できる失敗は、純粋な計算では`Maybe`や`Either`で表せます。

一方、実際のファイル読み込み失敗など、IO中に起きる例外はIOの境界で捕捉し、ドメインで扱えるエラーへ変換する方法があります。

エラー処理も「何でも例外」または「何でもEither」に統一するのではなく、失敗がどの層に属するかで分けます。

## 理解するときの要点

- 純粋関数は同じ入力から同じ結果を返す
- `IO a`は`a`そのものではなく、`a`を得る作用を含む処理
- 副作用は消すのではなく境界へ集める
- 判断や計算を純粋にするとテストしやすい
- `unsafePerformIO`で境界を迂回することを通常の設計手段にしない

## 参考資料

- [Haskell.org](https://www.haskell.org/)
- [GHC User's Guide: Safe Haskell](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/safe_haskell.html)
