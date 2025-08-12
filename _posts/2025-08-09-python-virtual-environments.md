---
layout: post
title: "Python仮想環境のススメ：venvを使ってみよう"
date: 2025-08-09 13:00:00 +0900
categories: [Programming, Python]
tags: [Python, venv, 仮想環境]
---

Pythonで開発を行う際、プロジェクトごとに独立した環境を用意することは非常に重要です。これにより、プロジェクト間の依存関係の衝突を防ぐことができます。Python 3.3以降では、`venv`モジュールが標準で提供されています。

## 仮想環境の作成と有効化

1. **作成:**
   ```bash
   python -m venv myenv
   ```

2. **有効化 (Windows):**
   ```bash
   myenv\Scripts\activate
   ```

3. **有効化 (macOS/Linux):**
   ```bash
   source myenv/bin/activate
   ```

仮想環境を有効化すると、`pip install`でインストールしたパッケージはその環境内にのみ保存されます。
