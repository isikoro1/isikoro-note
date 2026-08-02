---
title: "Haskellの代数的データ型とパターンマッチ"
summary: "直積型と直和型を使って業務上の状態を表し、パターンマッチで場合ごとの処理を記述する。"
category: "Tech"
type: "language-guide"
status: "draft"
created: "2026-08-03"
updated: "2026-08-03"
parent: "tech/haskell/haskell"
tags: ["Haskell", "Algebraic Data Type", "Pattern Matching"]
aliases: ["HaskellのADT", "代数的データ型"]
keywords:
  - algebraic data type
  - sum type
  - product type
  - pattern matching
history:
  - date: "2026-08-03"
    text: "初版作成"
related:
  - title: "Haskell"
    slug: "tech/haskell/haskell"
  - title: "Haskellの関数と型"
    slug: "tech/haskell/functions-and-types"
  - title: "状態遷移"
    slug: "tech/architecture/state-transition"
  - title: "ドメインモデル"
    slug: "tech/architecture/domain-model"
---

## 概要

代数的データ型は、複数の値をまとめたり、取り得る状態を列挙したりするための型です。

Haskellでは、データの形を先に定義し、パターンマッチによって形ごとの処理を記述します。文字列や数値の約束事だけで状態を表すより、不正な状態を型で減らせます。

## 直積型

複数の値をすべて持つデータは、直積型として表せます。

```haskell
data User = User
  { userId   :: Int
  , userName :: String
  }
```

`User`は、`Int`のIDと`String`の名前の両方を持ちます。Javaの単純なデータクラスに近い形です。

## 直和型

複数の候補のうち、いずれか一つを取るデータは直和型として表せます。

```haskell
data PaymentStatus
  = Pending
  | Authorized
  | Captured
  | Cancelled
  | Failed String
```

`PaymentStatus`は、定義した状態のいずれかです。`Failed`だけは理由を表す文字列も持ちます。

単なる文字列で`"pending"`などを管理する場合と違い、スペルミスや未定義の値を入り込ませにくくなります。

## パターンマッチ

データコンストラクタごとの処理を、パターンマッチで書けます。

```haskell
displayStatus :: PaymentStatus -> String
displayStatus Pending        = "処理待ち"
displayStatus Authorized     = "承認済み"
displayStatus Captured       = "売上確定"
displayStatus Cancelled      = "取消済み"
displayStatus (Failed reason) = "失敗: " ++ reason
```

新しい状態を追加したのに処理を書き忘れると、コンパイラの警告によって漏れを見つけられます。GHCでは不完全なパターンを警告として扱う設定を有効にしておくことが重要です。

## Maybeで値の不在を表す

値が存在しない可能性は、`null`の代わりに`Maybe`で表せます。

```haskell
findUserName :: Int -> Maybe String
findUserName 1 = Just "ishi"
findUserName _ = Nothing
```

利用側は`Just`と`Nothing`の両方を扱います。

```haskell
message :: Maybe String -> String
message (Just name) = "こんにちは、" ++ name
message Nothing     = "ユーザーが見つかりません"
```

値がない場合を型に含めることで、呼び出し側に処理を促せます。

## Eitherで成功と失敗を表す

失敗理由が必要な処理には`Either`を使えます。

```haskell
authorize :: Int -> Either String PaymentStatus
authorize amount
  | amount <= 0 = Left "金額が不正です"
  | otherwise   = Right Authorized
```

慣例として、`Left`に失敗、`Right`に成功を入れます。例外を投げる前に、想定内の失敗を戻り値の型として表現できないか検討できます。

## 不正な状態を表現しにくくする

次のようにBoolを複数並べると、矛盾した組み合わせを作れます。

```haskell
data Payment = Payment
  { isAuthorized :: Bool
  , isCaptured   :: Bool
  , isCancelled  :: Bool
  }
```

代わりに状態ごとの型を定義すると、「売上確定済みで未承認」のような組み合わせを減らせます。

ただし、型だけで業務ルールのすべてを保証できるわけではありません。状態遷移、永続化、外部システムとの整合性は別に設計する必要があります。

## 設計で使う観点

- 列挙できる状態を文字列ではなく直和型にできないか
- 値の不在を`Maybe`で表せないか
- 想定内の失敗を`Either`で返せないか
- パターンマッチに漏れがないか
- 不正な状態を生成できるコンストラクタを公開していないか

Haskellの代数的データ型は、関数型言語固有の小技というより、ドメインの状態をコードへ正確に写すための道具として見ると理解しやすくなります。

## 参考資料

- [HaskellWiki: Algebraic data type](https://www.haskell.org/haskellwiki/Algebraic_data_type)
- [GHC User's Guide: Generalised Algebraic Data Types](https://ghc.gitlab.haskell.org/ghc/doc/users_guide/exts/gadt.html)
