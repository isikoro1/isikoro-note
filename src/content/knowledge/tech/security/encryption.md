---
title: "暗号化"
summary: "データを第三者に読めない形に変換し、必要な鍵を持つ人だけが復号できるようにする仕組み。"
category: "Tech"
type: "security-term"
status: "draft"
created: "2026-07-19"
updated: "2026-07-19"
tags: ["Security", "Encryption", "Cryptography"]
aliases: ["Encryption", "復号", "暗号"]
keywords:
  - encryption
  - decryption
  - key
  - TLS
  - cryptography
history:
  - date: "2026-07-19"
    text: "初版作成"
related:
  - title: "セキュリティ"
    slug: "tech/security/security"
  - title: "ハッシュ化"
    slug: "tech/security/hashing"
---

## 概要

暗号化は、データを第三者に読めない形に変換し、必要な鍵を持つ人だけが復号できるようにする仕組みです。

通信内容、保存データ、秘密情報などを守るために使われます。

## 何に使うか

- 通信経路の保護
- 保存データの保護
- 秘密情報の保護
- バックアップデータの保護

## ハッシュ化との違い

暗号化は、鍵があれば元のデータに戻せます。
ハッシュ化は、基本的に元のデータに戻せません。

パスワード保存では、通常は暗号化ではなくハッシュ化を使います。

## 実装で見る観点

- 独自の暗号方式を作っていないか
- 鍵の管理場所が安全か
- 通信は HTTPS になっているか
- 暗号化すべきデータとハッシュ化すべきデータを混同していないか
- ログに秘密情報が出ていないか

## 関連する概念

- 復号
- 鍵管理
- TLS
- HTTPS
- ハッシュ化
