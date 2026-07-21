---
title: "オブジェクト指向"
summary: "状態と振る舞いを持つオブジェクトへ責務を分け、変更と複雑性を管理する設計の考え方。"
category: "Tech"
type: "guide"
status: "draft"
created: "2026-07-21"
updated: "2026-07-21"
tags: ["Architecture", "Design", "Java"]
aliases: ["Object-Oriented Programming", "OOP", "オブジェクト指向プログラミング"]
history:
  - date: "2026-07-21"
    text: "初版作成"
related:
  - title: "カプセル化"
    slug: "tech/architecture/encapsulation"
  - title: "抽象化"
    slug: "tech/architecture/abstraction"
  - title: "継承"
    slug: "tech/architecture/inheritance"
  - title: "ポリモーフィズム"
    slug: "tech/architecture/polymorphism"
  - title: "責務"
    slug: "tech/architecture/responsibility"
  - title: "委譲"
    slug: "tech/architecture/delegation"
---

## 概要

オブジェクト指向は、データとそのデータに関係する処理をオブジェクトとしてまとめ、オブジェクト同士の協調でシステムを構成する考え方です。

クラスや継承を使うこと自体が目的ではありません。責務、依存関係、変更の影響範囲を整理し、業務ルールをコード上で守れるようにすることが中心です。

## 状態と振る舞い

決済を表す `Payment` は、金額や状態を保持するだけでなく、オーソリや売上確定の条件を守る振る舞いを持てます。

```java
public class Payment {
    private PaymentStatus status = PaymentStatus.CREATED;

    public void authorize() {
        if (status != PaymentStatus.CREATED) {
            throw new IllegalStateException("オーソリできない状態です");
        }
        status = PaymentStatus.AUTHORIZED;
    }
}
```

外部から状態を自由に書き換えさせず、許可された操作だけを公開することで、不正な状態を作りにくくします。

## 主な要素

- カプセル化: 内部状態と変更ルールを保護する
- 抽象化: 具体的な実装差を隠し、役割を取り出す
- 継承: 既存の型を基に新しい型を作る
- ポリモーフィズム: 共通の型を通じて異なる実装を扱う
- 委譲: 処理を別のオブジェクトへ任せる
- 責務: そのクラスが引き受ける判断と処理の範囲

## 適用しやすい場面

- 状態遷移に制約がある
- 複数の値の整合性を守る必要がある
- 業務ルールを一か所にまとめたい
- 外部サービスや保存方式の変更を局所化したい

単純なCRUDやデータ変換では、すべてをオブジェクトへ詰め込むとかえって複雑になる場合があります。

## AI生成コードを見る観点

- フィールドが外部から無制限に変更できないか
- Serviceクラスへ業務ルールが集中していないか
- クラスの責務を一文で説明できるか
- 不要な継承やインターフェースが増えていないか
- 抽象化が実際に変化する箇所と一致しているか
- 不正な状態を作れる公開メソッドがないか

AIはクラスを生成できますが、どこに責務を置くべきかは要件と変更可能性を踏まえて判断する必要があります。

## 参考文献

- Martin Fowler: Refactoring
- Robert C. Martin: Clean Architecture
