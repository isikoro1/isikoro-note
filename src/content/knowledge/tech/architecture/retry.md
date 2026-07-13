---
title: "リトライ"
summary: "一時的な失敗に対して、同じ処理を再実行して復旧を試みる設計。外部連携や決済処理で重要になる。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-13"
tags: ["Architecture", "Backend", "Reliability", "金融"]
aliases: ["retry", "再試行", "再実行"]
keywords:
  - timeout
  - idempotency
  - backoff
  - circuit breaker
  - external API
  - 障害復旧
  - 二重処理防止
  - 冪等性
related:
  - title: "冪等性"
    slug: "tech/architecture/idempotency"
  - title: "タイムアウト"
    slug: "tech/architecture/timeout"
  - title: "金融ドメイン"
    slug: "work/finance/financial-domain"
---

## 概要

リトライは、一時的な失敗に対して同じ処理を再実行し、復旧を試みる設計です。
ネットワーク、外部API、DB接続、メッセージ処理などで使われます。

## 内容

一時的な通信失敗やタイムアウトは、少し待って再実行すれば成功する場合があります。
ただし、何でもリトライすればよいわけではありません。

特に決済や入金のような処理では、同じ処理を再実行することで二重処理になる危険があります。
そのため、リトライは冪等性や一意なリクエストIDと合わせて考える必要があります。

## 見るときの観点

- その失敗はリトライしてよい種類か
- 最大何回まで再試行するか
- どの間隔で再試行するか
- 同じ処理を複数回実行しても安全か
- 外部システム側では成功している可能性がないか
- ログや監査証跡で追跡できるか

## 関連する設計

- exponential backoff
- circuit breaker
- idempotency key
- timeout
- dead letter queue
