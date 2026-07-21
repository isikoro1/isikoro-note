---
title: "AWS"
summary: "サーバー、ストレージ、データベースなどのITリソースを必要に応じて利用できる、Amazonのクラウドプラットフォーム。"
category: "Tech"
type: "term"
status: "draft"
created: "2026-07-22"
updated: "2026-07-22"
importance: "high"
tags: ["AWS", "Cloud", "Infrastructure", "Backend"]
aliases: ["Amazon Web Services", "Amazon AWS"]
keywords:
  - AWS
  - クラウド
  - EC2
  - S3
  - RDS
  - Lambda
  - IAM
  - VPC
  - CloudWatch
  - Infrastructure as Code
history:
  - date: "2026-07-22"
    text: "初版作成"
related:
  - title: "セキュリティ"
    slug: "tech/security/security"
  - title: "TCP/IP"
    slug: "tech/network/tcp-ip"
---

## 概要

AWS（Amazon Web Services）は、Amazonが提供するクラウドプラットフォームです。

サーバー、ストレージ、データベース、ネットワークなどのITリソースを、必要なときに必要な分だけ用意できます。自分で物理サーバーを購入して設置する場合と比べて、環境を短時間で構築し、利用状況に応じて規模を変更しやすいことが特徴です。

AWSには多数のサービスがありますが、最初からすべてを覚える必要はありません。アプリケーションを動かすために、どの役割をどのサービスへ任せるのかを見ることが重要です。

## 最初に見るサービス

| 役割 | 主なサービス | 概要 |
| --- | --- | --- |
| 仮想サーバー | EC2 | OSを含む仮想サーバーを作成して利用する |
| オブジェクトストレージ | S3 | 画像、ファイル、バックアップ、静的コンテンツなどを保存する |
| リレーショナルデータベース | RDS | PostgreSQLやMySQLなどのデータベースをマネージドサービスとして利用する |
| 関数実行 | Lambda | サーバーを常時管理せず、イベントに応じてコードを実行する |
| ネットワーク | VPC | AWS上に論理的に分離されたネットワークを構成する |
| 権限管理 | IAM | ユーザー、ロール、ポリシーを使ってAWSリソースへのアクセスを制御する |
| 監視 | CloudWatch | ログ、メトリクス、アラームなどを扱う |
| DNS | Route 53 | ドメイン名と接続先を管理する |
| CDN | CloudFront | コンテンツを利用者に近い拠点から配信する |

サービス名を個別に暗記するより、コンピューティング、ストレージ、データベース、ネットワーク、認証・認可、監視という役割に分けて理解すると整理しやすくなります。

## リージョンとアベイラビリティーゾーン

AWSのインフラストラクチャは、地理的な単位である**リージョン**と、リージョン内の独立した拠点である**アベイラビリティーゾーン（AZ）**に分かれています。

システムを設計するときは、単に東京リージョンを選ぶだけでなく、障害が発生した場合に備えて複数のAZをどう利用するかを考えます。ただし、個人開発や検証環境では、可用性を高める構成がそのまま費用増加につながることもあります。

## 責任共有モデル

AWSを使えば、セキュリティをすべてAWSへ任せられるわけではありません。

AWSは、データセンター、物理サーバー、ネットワーク設備など、クラウド基盤側のセキュリティを担当します。利用者は、IAMの権限、ネットワーク設定、OSやアプリケーション、保存するデータなど、自分がAWS上に構築した範囲を管理します。

たとえば、S3の公開設定やIAMポリシーを誤れば、AWSの基盤が安全でも情報漏えいにつながります。どこまでがAWSの責任で、どこからが利用者の責任なのかをサービスごとに確認する必要があります。

## 料金で注意すること

AWSは従量課金が基本です。小さく始めやすい一方で、リソースを削除し忘れたり、想定外の通信や処理が発生したりすると費用がかかります。

学習や個人開発では、少なくとも次を確認します。

- AWS Budgetsなどで予算と通知を設定する
- 不要になったEC2、RDS、NAT Gatewayなどを停止または削除する
- 停止してもストレージや固定IPなどの料金が残らないか確認する
- 無料利用枠の対象、上限、有効期間を現在の公式情報で確認する
- アクセスキーをソースコードやGitHubへ保存しない
- 管理者権限を常用せず、必要な権限だけを付与する

「無料枠で始めたから費用は発生しない」とは限りません。実行前に料金体系を確認し、実行後にリソースが残っていないか確認します。

## 構築方法

AWSのリソースは、主に次の方法で作成・管理します。

- AWS Management Console
- AWS CLI
- AWS SDK
- AWS CloudFormation
- AWS CDK
- TerraformなどのInfrastructure as Codeツール

最初はManagement Consoleで各リソースの役割を確認すると理解しやすくなります。ただし、構成を再現したり、変更履歴を管理したりする場合は、CloudFormation、CDK、Terraformなどを使ってコードとして定義する方法が向いています。

## 学習資料

### AWSによるクラウド入門

[「AWSによるクラウド入門」](https://tomomano.gitlab.io/intro-aws/)は、東京大学計数工学科で2020年度に開講された「システム情報工学特論」の一部として作成された、無料で読める講義資料です。

クラウド初心者を対象に、基礎概念の説明とハンズオンを組み合わせています。主に次の内容を扱っています。

- クラウド、ネットワーク、セキュリティの基礎
- EC2を使った仮想サーバーの構築
- DockerとECSを使った機械学習環境
- Lambda、S3、DynamoDBを使ったサーバーレス構成
- API Gatewayを含むWebサービスの構築
- AWS CDKによるリソースの定義とデプロイ

AWSのサービスを個別に暗記するのではなく、実際に構成を作りながら全体像をつかむ資料として利用できます。

ただし、リンク先は2020年度版のアーカイブです。AWSの画面、サービス仕様、料金、無料利用枠、推奨される設定は変更されている可能性があります。ハンズオンを実行するときは、現在のAWS公式ドキュメントと料金ページも確認します。

## 参考文献

- [Overview of Amazon Web Services（AWS公式）](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/introduction.html)
- [What is cloud computing?（AWS公式）](https://docs.aws.amazon.com/whitepapers/latest/aws-overview/what-is-cloud-computing.html)
- [AWS Documentation](https://docs.aws.amazon.com/)
- [AWSによるクラウド入門](https://tomomano.gitlab.io/intro-aws/)
