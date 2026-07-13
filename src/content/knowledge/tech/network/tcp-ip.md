---
title: "TCP/IP"
summary: "インターネットや業務システムの通信を理解するための基本的なプロトコル群。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-14"
tags: ["Network", "Web", "Infrastructure"]
aliases: ["Transmission Control Protocol", "Internet Protocol", "ネットワークプロトコル"]
keywords:
  - IP address
  - port
  - TCP
  - UDP
  - HTTP
  - DNS
  - routing
  - packet
  - three-way handshake
  - timeout
  - retry
  - connection
related:
  - title: "タイムアウト"
    slug: "tech/architecture/timeout"
  - title: "リトライ"
    slug: "tech/architecture/retry"
  - title: "Cookie"
    slug: "tech/web/cookie"
  - title: "Session"
    slug: "tech/web/session"
---

## 概要

TCP/IP は、ネットワーク通信を行うための基本的なプロトコル群です。
Webアプリケーション、API通信、データベース接続、外部システム連携など、多くの業務システムの土台になります。

## 内容

TCP は、相手にデータが届いたかを確認しながら通信する仕組みです。
IP は、通信相手の場所をIPアドレスで扱い、パケットを目的地へ届けるための仕組みです。

業務システムでは、通信エラー、タイムアウト、リトライ、接続数、ポート、DNS、TLS などの理解につながります。

## 見るときの観点

- どのサーバーと通信しているか
- どのポートを使っているか
- 接続が張れないのか、応答が遅いのか
- タイムアウトとリトライはどう設計されているか
- HTTPやDB接続の下にTCP/IPがあることを意識できるか

## 関連する概念

- IPアドレス
- ポート番号
- DNS
- HTTP
- TLS
- タイムアウト
- リトライ

## 参考文献

- RFC 791: Internet Protocol
- RFC 9293: Transmission Control Protocol
