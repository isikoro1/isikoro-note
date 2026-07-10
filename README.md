# isikorog note

技術・開発・ゲーム・仕事の知識を、記事ではなく「あとから引けるページ」として育てる個人ナレッジベースです。

## 方針

- ブログのように時系列で読ませるより、検索・分類・関連リンクでアクセスしやすくする
- 1ページを小さく保つ
- 完成度より、まずページを作ることを優先する
- `status: stub` や `status: draft` を許容する
- 用語ページから関連ページへ飛べるようにする
- 文章だけでなく、カード・注意枠・フロー図で見やすく整理する

## 技術スタック

- Astro
- Markdown
- TypeScript
- GitHub Pages

## ローカル起動

```bash
npm install
npm run dev
```

## 新しいページの追加

`src/content/knowledge/` 以下に Markdown ファイルを追加します。

例:

```text
src/content/knowledge/tech/java/ejb.md
src/content/knowledge/tech/web/cors.md
src/content/knowledge/work/detail-design.md
src/content/knowledge/game/example-game/example-page.md
```

## ページテンプレート

```md
---
title: "用語名"
summary: "短い説明"
category: "Tech"
type: "term"
status: "stub"
updated: "2026-07-10"
tags: ["Java", "Web"]
aliases: ["別名", "検索用の表記ゆれ"]
related:
  - title: "関連ページ名"
    slug: "tech/java/example"
---

## ざっくり

## 何に使う？

## 自分用メモ
```

## 図形ブロック

Markdown内にHTMLを書くと、Excelの図形挿入に近い見た目のブロックを使えます。
使い方は `src/content/knowledge/tools/visual-blocks.md` を参照します。

### 注意枠

```html
<div class="shape-warning">
  <h3>注意</h3>
  <p>ここに注意点を書く。</p>
</div>
```

### フロー図

```html
<div class="flow">
  <div class="flow-node">Start</div>
  <div class="flow-arrow">→</div>
  <div class="flow-node">Process</div>
  <div class="flow-arrow">→</div>
  <div class="flow-node">End</div>
</div>
```

### カード一覧

```html
<div class="shape-grid">
  <div class="shape-card">
    <h3>項目</h3>
    <p>説明を書く。</p>
  </div>
</div>
```

## ページ種別

- `term`: 用語ページ
- `compare`: 比較ページ
- `guide`: 流れ・入門ページ
- `memo`: 個人メモ

## ステータス

- `stub`: とりあえずページだけある
- `draft`: ざっくり書いた
- `review`: 確認中
- `stable`: ひとまず信頼できる
