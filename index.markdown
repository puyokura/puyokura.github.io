---
layout: default
---

<div class="Box">
  <div class="Box-header">
    <h3 class="Box-title">記事一覧</h3>
  </div>
  {% for post in site.posts %}
    <div class="Box-row">
      <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
      <p class="text-gray-light">{{ post.date | date: "%Y年%m月%d日" }}</p>
    </div>
  {% endfor %}
</div>
