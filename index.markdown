---
layout: default
---

<div class="post-list">
  <h1>最新の記事</h1>
  <ul>
    {% for post in paginator.posts %}
      <li>
        <h2>
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <p class="post-meta">{{ post.date | date: "%Y年%m月%d日" }}</p>
        <p>{{ post.excerpt }}</p>
      </li>
    {% endfor %}
  </ul>
</div>

<div class="pagination">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | relative_url }}" class="btn">前へ</a>
  {% else %}
    <span class="btn btn-disabled">前へ</span>
  {% endif %}

  <span class="page-info">{{ paginator.page }} / {{ paginator.total_pages }}</span>

  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | relative_url }}" class="btn">次へ</a>
  {% else %}
    <span class="btn btn-disabled">次へ</span>
  {% endif %}
</div>
