---
layout: post
title: "Reactで簡単なカウンターアプリを作る"
date: 2025-08-04 18:00:00 +0900
categories: [Programming, JavaScript]
tags: [React, フロントエンド, チュートリアル]
---

Reactは、ユーザーインターフェースを構築するための人気のJavaScriptライブラリです。コンポーネントベースの設計が特徴で、再利用性の高いUI部品を作成できます。

ここでは、Reactの基本的なフックである`useState`を使って、簡単なカウンターアプリを作成します。

```jsx
import React, { useState } from 'react';

function Counter() {
  // "count" という新しい state 変数を宣言します
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;
```

このコードは、クリックするたびに数字が増えるシンプルなカウンターを表示します。`useState`が、関数コンポーネント内で状態を保持する力を与えてくれます。
