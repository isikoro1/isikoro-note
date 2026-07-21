---
title: "状態遷移"
summary: "対象が取り得る状態と、状態を変更できる条件や操作を定義する考え方。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "Domain", "Design"]
aliases: ["State Transition", "ステートマシン", "状態機械"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "ドメインモデル"
    slug: "tech/architecture/domain-model"
  - title: "カプセル化"
    slug: "tech/architecture/encapsulation"
---

## 概要

状態遷移は、対象が現在どの状態にあり、どの操作によって次の状態へ移れるかを定義するものです。

決済では、たとえば次の流れがあります。

```text
CREATED → AUTHORIZED → CAPTURED
              └──────→ CANCELLED
CAPTURED → PARTIALLY_REFUNDED → REFUNDED
```

## 設計する内容

- 取り得る状態
- 許可する遷移
- 遷移を起こす操作
- 遷移できない場合の扱い
- 外部システムと状態がずれた場合の復旧

## AI生成コードを見る観点

- 任意の状態へ直接書き換えられないか
- 同じイベントを再処理しても壊れないか
- 終端状態から不正に戻れないか
- DB上の状態と外部決済の状態を混同していないか
- 状態名が画面表示ではなく業務上の意味を表しているか

## 参考文献

- Martin Fowler: State Machine
