---
# このファイルにコンテンツやカスタムFront Matterを自由に追加できます。
# レイアウトを変更するには、https://jekyllrb.com/docs/themes/#overriding-theme-defaults を参照してください。

layout: default
---

<h1>記事一覧</h1>

<ul>
  {% for post in site.posts %}
    <li>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.excerpt }}</p>
    </li>
  {% endfor %}
</ul>
