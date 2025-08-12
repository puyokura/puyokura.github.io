---
layout: post
title: "REST APIの基本を学ぶ"
date: 2025-08-08 14:00:00 +0900
categories: [Web-Development, API]
tags: [REST, API, HTTP]
---

REST (Representational State Transfer) は、Webサービスの設計原則の一つです。HTTPプロトコルをベースにしており、シンプルでスケーラブルなシステムを構築するのに適しています。

## RESTの原則

- **ステートレス:** サーバーはクライアントの状態を保存しません。
- **クライアント/サーバー分離:** UIとデータストレージを分離します。
- **キャッシュ可能性:** レスポンスはキャッシュ可能であるべきです。

一般的なHTTPメソッドと、それに対応する操作（CRUD）は以下の通りです。

- `GET`: リソースの取得 (Read)
- `POST`: リソースの作成 (Create)
- `PUT`: リソースの更新 (Update)
- `DELETE`: リソースの削除 (Delete)
