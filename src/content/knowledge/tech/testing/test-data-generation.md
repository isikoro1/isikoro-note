---
title: "テストデータ生成"
summary: "テスト条件に必要な入力データやオブジェクトを、再現可能な形で作成する仕組み。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Testing", "Test Data", "Automation"]
aliases: ["Test Data Generation", "Fixture", "Test Factory"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "重要なテスト"
    slug: "tech/testing/critical-tests"
---

## 概要

テストデータ生成は、テストで必要なユーザー、注文、決済などのデータを、一定の規則で作成する仕組みです。

Fixture、Factory、Builder、Seederなどの方法があります。

## AIに任せやすい理由

データ構造と制約が明確であれば、大量のサンプルや境界値を機械的に生成しやすいためです。

## 注意点

ランダム生成だけでは、失敗を再現できないことがあります。固定seed、意味のあるデフォルト値、必要な項目だけ上書きできるBuilderなどを使います。

## AI生成コードを見る観点

- 本番データや実在するカード情報を使っていないか
- テストごとにデータが独立しているか
- 境界値、不正値、重複値も生成できるか
- ランダム値による不安定なテストになっていないか
- デフォルト値がテスト対象の条件を隠していないか

## 参考文献

- xUnit Test Patterns
