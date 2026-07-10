---
title: "Visual Blocks"
summary: "Markdownの中でExcelの図形挿入のように、カード・注意枠・フロー図・レイヤー図を使うための書き方。"
category: "Tools"
type: "guide"
status: "draft"
updated: "2026-07-10"
tags: ["Markdown", "Design", "Knowledge Base"]
aliases: ["図形ブロック", "見やすいノート", "図解"]
related:
  - title: "Struts"
    slug: "tech/java/struts"
  - title: "MVC"
    slug: "tech/architecture/mvc"
---

## ざっくり

Markdownだけだと文章が平坦になりやすいので、HTMLとCSSで見やすい図形ブロックを使えるようにする。
Excelの図形挿入のように、概念・流れ・注意点を視覚的に整理するための部品。

## カード

<div class="shape-grid">
  <div class="shape-card">
    <h3>用語</h3>
    <p>短い定義を書く。</p>
  </div>
  <div class="shape-card">
    <h3>使う場面</h3>
    <p>実務や実装で出る場所を書く。</p>
  </div>
  <div class="shape-card">
    <h3>注意点</h3>
    <p>勘違いしやすい点を書く。</p>
  </div>
</div>

## 注意枠

<div class="shape-note">
  <h3>メモ</h3>
  <p>補足情報や自分用メモを書く。</p>
</div>

<div class="shape-warning">
  <h3>注意</h3>
  <p>誤解しやすい点、実装時に詰まりやすい点を書く。</p>
</div>

<div class="shape-success">
  <h3>理解できたこと</h3>
  <p>学習して腹落ちした内容を書く。</p>
</div>

<div class="shape-danger">
  <h3>危険</h3>
  <p>セキュリティやデータ破壊につながる注意を書く。</p>
</div>

## フロー図

<div class="flow">
  <div class="flow-node">Request</div>
  <div class="flow-arrow">→</div>
  <div class="flow-node">Action</div>
  <div class="flow-arrow">→</div>
  <div class="flow-node">Service</div>
  <div class="flow-arrow">→</div>
  <div class="flow-node">DB</div>
</div>

## レイヤー図

<div class="layer-stack">
  <div class="layer">
    <strong>View</strong>
    画面表示。JSP、HTML、Reactなど。
  </div>
  <div class="layer">
    <strong>Controller</strong>
    入力を受け取り、処理の流れを制御する。
  </div>
  <div class="layer">
    <strong>Model / Service</strong>
    業務ロジックやデータ処理を担当する。
  </div>
</div>

## コピー用テンプレート

```html
<div class="shape-note">
  <h3>メモ</h3>
  <p>ここに内容を書く。</p>
</div>
```

```html
<div class="flow">
  <div class="flow-node">Start</div>
  <div class="flow-arrow">→</div>
  <div class="flow-node">Process</div>
  <div class="flow-arrow">→</div>
  <div class="flow-node">End</div>
</div>
```

## 自分用メモ

最初はこの程度で十分。自由配置エディタを作るより、まずは知識ページの見やすさを上げる。
