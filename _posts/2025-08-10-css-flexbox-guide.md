---
layout: post
title: "CSS Flexbox完全ガイド：基本から応用まで"
date: 2025-08-10 12:00:00 +0900
categories: [Web-Design, CSS]
tags: [CSS, Flexbox, レイアウト]
---

CSS Flexboxは、1次元のレイアウトモデルであり、アイテム間のスペースの分配や整列を簡単に行うための強力な機能を提供します。

## 基本的なプロパティ

Flexboxを使いこなすには、親要素（コンテナ）と子要素（アイテム）のプロパティを理解する必要があります。

- **親要素のプロパティ:**
  - `display: flex;`
  - `flex-direction: row | column;`
  - `justify-content: center | space-between | ...;`
  - `align-items: center | stretch | ...;`

- **子要素のプロパティ:**
  - `flex-grow: <number>;`
  - `flex-shrink: <number>;`
  - `flex-basis: <length> | auto;`

これらのプロパティを組み合わせることで、複雑なレイアウトも柔軟に構築できます。
