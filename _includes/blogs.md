<div class='blog' markdown='1'>
{% for post in site.posts %}
  -- <span class="date">{{ post.date | date: '%Y %b %d' }}</span> - [{{ post.title }}]({{ post.url }})  {% endfor %}
</div>
