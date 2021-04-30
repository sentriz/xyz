---
layout: default
title: senan kelly
---

# welcome to my website
for more about me, see **[here]({{ '/about' | relative_url }})**

# blog posts

{% for post in site.posts -%}
-- <span class="date">{{ post.date | date: '%Y %b %d' }}</span>, [{{ post.title }}]({{ post.url }})  
{% endfor %}

<div id="purdy">
<img src="{{ '/assets/images/purdy.jpg' | relative_url }}">
<img src="{{ '/assets/images/purdy.jpg' | relative_url }}">
</div>
