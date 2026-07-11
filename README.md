# 石ころノート

技術、業務知識、個人開発、ゲーム、生活知識などを、あとから参照できるように整理するナレッジベースです。

## 方針

- ブログのように時系列で読ませるより、検索・分類・関連リンクでアクセスしやすくする
- 筆者個人を前面に出さず、知識そのものを中心に書く
- 個性は語り口ではなく、扱うテーマ・分類・リンク構造に自然に出るものとして扱う
- 1ページを小さく保ち、必要に応じて追記する
- 用語ページから関連ページへ飛べるようにする
- 見た目より、情報密度・検索性・階層構造を優先する

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

## ディレクトリ方針

`src/content/knowledge/` 以下に Markdown ファイルを追加します。

```text
src/content/knowledge/
  tech/
    java/
    frontend/
    web/
    database/
    architecture/
  work/
    finance/
  game/
  tools/
  life/
  routes/
```

## 新しいページの追加例

```text
src/content/knowledge/tech/java/ejb.md
src/content/knowledge/tech/frontend/astro.md
src/content/knowledge/tech/web/cors.md
src/content/knowledge/work/finance/authorization.md
src/content/knowledge/life/sleep.md
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

## 概要

## 主な用途

## 基本構成

## 関連する概念
```

## ページ種別

- `term`: 用語ページ
- `compare`: 比較ページ
- `guide`: 流れ・入門ページ
- `memo`: 断片的なメモ

## ステータス

- `stub`: とりあえずページだけある
- `draft`: ざっくり書いた
- `review`: 確認中
- `stable`: ひとまず信頼できる
