---
title: "XSS"
summary: "Webページに悪意あるスクリプトを埋め込まれ、利用者のブラウザ上で実行される脆弱性。"
category: "Tech"
type: "security-term"
status: "draft"
created: "2026-07-19"
updated: "2026-07-19"
tags: ["Security", "XSS", "Web"]
aliases: ["クロスサイトスクリプティング", "Cross Site Scripting"]
keywords:
  - XSS
  - script injection
  - escape
  - sanitize
  - CSP
history:
  - date: "2026-07-19"
    text: "初版作成"
related:
  - title: "セキュリティ"
    slug: "tech/security/security"
  - title: "Cookie"
    slug: "tech/web/cookie"
---

## 概要

XSS は、Webページに悪意あるスクリプトを埋め込まれ、利用者のブラウザ上で実行される脆弱性です。

掲示板、コメント欄、検索結果、プロフィール欄など、ユーザーが入力した内容を画面に表示する場所で問題になりやすいです。

## 何が起きるか

XSS が成立すると、攻撃者のスクリプトが利用者のブラウザで実行される可能性があります。

その結果、Cookie やトークンの窃取、画面の改ざん、意図しない操作の実行などにつながることがあります。

## 実装で見る観点

- ユーザー入力をそのままHTMLとして出力していないか
- HTMLエスケープが行われているか
- Markdownやリッチテキストの扱いが安全か
- Cookie に HttpOnly などの属性を付けているか
- CSP を使える場面か

## 対策の方向性

基本は、入力値を信用せず、出力時に文脈に応じてエスケープすることです。

フレームワークが標準でエスケープしてくれる場合でも、危険なHTML挿入APIや独自のHTML生成を使うときは注意が必要です。

## 関連する概念

- エスケープ
- サニタイズ
- Cookie
- HttpOnly
- CSP
