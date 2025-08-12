---
layout: post
title: "CSS Grid Layoutを使いこなす"
date: 2025-08-03 19:00:00 +0900
categories: [Web-Design, CSS]
tags: [CSS, Grid, レイアウト]
---

CSS Grid Layoutは、Flexboxが1次元のレイアウトシステムであるのに対し、2次元（行と列）のレイアウトを扱うための強力なシステムです。

## Gridの基本

Gridレイアウトを始めるには、コンテナ要素に`display: grid`を設定します。

```css
.grid-container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: 80px 200px;
  gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}
```

この例では、3列のグリッドが作成されます。`grid-template-columns`で行のサイズ、`grid-template-rows`で列のサイズ、`gap`でアイテム間の間隔を指定します。

Gridは複雑なWebページのレイアウトを、より直感的かつ堅牢に構築するための現代的な解決策です。
