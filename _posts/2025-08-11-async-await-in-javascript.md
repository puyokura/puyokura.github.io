---
layout: post
title: "JavaScriptの非同期処理：Async/Awaitを理解する"
date: 2025-08-11 11:00:00 +0900
categories: [Programming, JavaScript]
tags: [JavaScript, 非同期処理, Promise]
---

JavaScriptにおける非同期処理は、多くの開発者がつまずくポイントの一つです。特に、`Promise`をさらに直感的に扱えるようにした`async/await`構文は、現代的なJavaScript開発に欠かせません。

## Async/Awaitとは？

`async`関数は、内部で`await`キーワードを使うことを可能にします。`await`は`Promise`が解決されるまで関数の実行を一時停止し、解決された後にその結果を返します。

```javascript
// Promiseを返す非同期関数
function resolveAfter2Seconds() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('resolved');
    }, 2000);
  });
}

async function asyncCall() {
  console.log('calling');
  const result = await resolveAfter2Seconds();
  console.log(result); // 2秒後に "resolved" と表示される
}

asyncCall();
```

このように、`async/await`を使うことで、非同期処理を同期処理のような見た目で簡潔に記述できます。
