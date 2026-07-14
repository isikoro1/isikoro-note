---
title: "OSI参照モデル"
summary: "ネットワーク通信を7つの層に分けて整理するための参照モデル。TCP/IPやHTTPの位置づけを理解する入口になる。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-14"
updated: "2026-07-14"
tags: ["Network", "TCP/IP", "基礎"]
aliases: ["OSI", "OSIモデル", "OSI 7階層", "Open Systems Interconnection"]
keywords:
  - 物理層
  - データリンク層
  - ネットワーク層
  - トランスポート層
  - セッション層
  - プレゼンテーション層
  - アプリケーション層
  - TCP/IP
  - IP
  - TCP
  - HTTP
history:
  - date: "2026-07-14"
    text: "初版作成"
related:
  - title: "TCP/IP"
    slug: "tech/network/tcp-ip"
  - title: "REST API"
    slug: "tech/web/rest-api"
  - title: "基本情報技術者"
    slug: "routes/basic-information-engineer"
---

## 概要

OSI参照モデルは、ネットワーク通信を7つの層に分けて考えるためのモデルです。
実際のインターネットはTCP/IPを中心に動いていますが、通信のどの部分を見ているのか整理するために使えます。

## 7階層

- 第7層 アプリケーション層: HTTP、DNS、SMTPなど、アプリケーションに近い通信
- 第6層 プレゼンテーション層: 文字コード、暗号化、圧縮などの表現形式
- 第5層 セッション層: 通信の開始、維持、終了
- 第4層 トランスポート層: TCP、UDPなど、端末間の通信制御
- 第3層 ネットワーク層: IPアドレス、ルーティング
- 第2層 データリンク層: MACアドレス、LAN内の通信
- 第1層 物理層: ケーブル、電気信号、無線など

## 見るときの観点

障害調査では、どの層で問題が起きているかを切り分けます。
たとえば、DNSが引けないのか、TCP接続できないのか、HTTPレスポンスが返らないのかで見る場所が変わります。

Webアプリケーション開発では、HTTPやREST APIだけでなく、その下にTCP/IPやDNSがあることを意識すると、通信エラーやタイムアウトを理解しやすくなります。

## 関連する概念

- TCP/IP
- HTTP
- DNS
- IPアドレス
- ポート番号
- タイムアウト
- REST API

## 参考文献

- IPA: 基本情報技術者試験
