---
title: "Struts"
summary: "古いJava業務システムで見かけるWebアプリケーションフレームワーク。"
category: "Tech"
type: "term"
status: "draft"
updated: "2026-07-10"
tags: ["Java", "Web", "MVC", "Legacy"]
aliases: ["Apache Struts", "Struts Framework"]
related:
  - title: "Servlet"
    slug: "tech/java/servlet"
  - title: "JSP"
    slug: "tech/java/jsp"
  - title: "MVC"
    slug: "tech/architecture/mvc"
---

## ざっくり

Struts は、Java の古い Web アプリケーションフレームワークです。
リクエストを Action に渡し、処理結果に応じて JSP などの画面へ遷移します。

<div class="flow">
  <div class="flow-node">Browser</div>
  <div class="flow-arrow">→</div>
  <div class="flow-node">Request</div>
  <div class="flow-arrow">→</div>
  <div class="flow-node">Action</div>
  <div class="flow-arrow">→</div>
  <div class="flow-node">JSP</div>
</div>

## 何に使う？

長く運用されている業務システムの画面処理で使われることがあります。
新規開発では Spring MVC や Spring Boot の方が一般的ですが、金融系・基幹系では既存資産として残っている可能性があります。

<div class="shape-warning">
  <h3>注意</h3>
  <p>まずは設定ファイルの細部より、URL、Action、遷移先JSPの対応関係を読むことを優先する。</p>
</div>

## 最低限見るところ

<div class="shape-grid">
  <div class="shape-card">
    <h3>Action</h3>
    <p>リクエストを受けて処理を呼び出す場所。</p>
  </div>
  <div class="shape-card">
    <h3>Form</h3>
    <p>画面入力値を受け取るための入れ物。</p>
  </div>
  <div class="shape-card">
    <h3>JSP</h3>
    <p>処理結果を表示する画面。</p>
  </div>
</div>

## 自分用メモ

最初は細かい設定より、リクエストから画面表示までの流れを読めることを優先する。
