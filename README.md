# 石ころノート

技術、業務知識、個人開発で扱った知識を、分野ごとにつなげて育てる個人ナレッジベースです。すべてのIT用語を網羅するのではなく、実際に使った技術、関心がある分野、深掘りしたい内容を中心に整理します。

## 方針

- 時系列の記事一覧ではなく、カテゴリ・検索・関連リンクから知識を辿れる形にする
- 1ページを小さく始め、理解が深まったときに追記する
- 本や資料の構成をなぞらず、自分の理解・実装・判断に組み直す
- 見た目の装飾より、情報密度、階層、ページ同士のつながりを優先する
- 記事の作成、構成相談、整理にはAIも利用する

## 主な機能

- カテゴリ別のトップページと索引
- タイトル、概要、キーワード、本文を対象にしたサイト内検索
- 記事内の見出し目次
- パンくずリスト
- 関連項目と被参照ページの表示
- サイト全体の更新履歴
- frontmatter、関連項目、内部リンクを検査するコンテンツチェック

## 技術スタック

- Astro
- Markdown
- TypeScript
- GitHub Pages

## ローカルでの確認

```bash
npm install
npm run dev
```

記事構造だけを検査する場合は `npm run check:content`、記事検査とビルドを続けて実行する場合は `npm run check` を使います。

## コンテンツの配置

Markdownは `src/content/knowledge/` 以下に置きます。主な分類は次のとおりです。

```text
src/content/knowledge/
  start/       # このサイトについて、使用上の注意、更新履歴
  projects/    # 自作プロジェクト
  tech/        # 言語、Web、クラウド、ネットワーク、設計、セキュリティなど
  work/        # 業務知識
  terms/       # IT用語メモ
  routes/      # 学習ルート
  reverse/     # 索引
```

## ページテンプレート

```md
---
title: "ページ名"
summary: "短い説明"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-24"
updated: "2026-07-24"
tags: ["Java", "Web"]
aliases: ["検索用の表記ゆれ"]
keywords: ["検索語"]
history:
  - date: "2026-07-24"
    text: "初版作成"
related:
  - title: "関連ページ名"
    slug: "tech/java/example"
---

## 概要

## 内容

## 参考文献
```

必要に応じて `parent` を指定すると、パンくずリストに親ページを表示できます。見出しが複数ある記事では目次が自動表示され、`related` でこのページを指定している記事は被参照ページとして表示されます。

## ページ種別

- `term`: 用語ページ
- `compare`: 比較ページ
- `guide`: 流れ・入門ページ
- `history`: 更新履歴

## ステータス

- `stub`: 入口だけ用意した段階
- `draft`: 内容を追加している段階
- `review`: 内容を確認している段階
- `stable`: 現時点でひととおり整理できている段階

## コンテンツチェック

`npm run check:content` は、重複slug、存在しない関連項目、壊れたサイト内リンクをエラーとして扱います。title、summary、type、status、updated、relatedの不足は警告として表示します。
