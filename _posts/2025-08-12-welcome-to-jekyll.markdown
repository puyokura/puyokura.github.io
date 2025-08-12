---
layout: post
title:  "Jekyllへようこそ！"
date:   2025-08-12 16:21:47 +0900
categories: ブログ
tags: [Jekyll, サンプル]
---

この記事は `_posts` ディレクトリにあります。ファイルを編集してサイトを再ビルドすると、変更が反映されます。サイトの再ビルドには様々な方法がありますが、最も一般的なのは `bundle exec jekyll serve` コマンドを実行する方法です。これによりWebサーバーが起動し、ファイルが更新されるたびにサイトが自動的に再生成されます。

Jekyllのブログ投稿ファイルは、以下の形式で名前を付ける必要があります。

`YEAR-MONTH-DAY-title.MARKUP`

`YEAR` は4桁の年、`MONTH` と `DAY` は2桁の月と日、`MARKUP` はファイル形式の拡張子です。その後、必要なFront Matterを記述します。この記事のソースを見て、どのように機能するかを確認してください。

Jekyllはコードスニペットも強力にサポートしています。

```ruby
def print_hi(name)
  puts "こんにちは、#{name}さん"
end
print_hi('Tom')
#=> "こんにちは、Tomさん" と標準出力に出力されます。
```

### 数式表示テスト

これはMathJaxのテストです。インライン数式: $E=mc^2$ と、ブロック数式です:

$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$

Jekyllを最大限に活用する方法については、[Jekyllのドキュメント][jekyll-docs]をご覧ください。バグや機能リクエストは[JekyllのGitHubリポジトリ][jekyll-gh]へ。質問は[Jekyll Talk][jekyll-talk]でどうぞ。

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/
