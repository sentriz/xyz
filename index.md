---
layout: default
title: senan kelly
---

# about

-- [cpssd](https://cpssd.net/) student from co. kildare, ireland  
-- **[more]({{ '/about' | relative_url }})**

# blog posts

{% for post in site.posts -%}
-- <span class="date">{{ post.date | date: '%Y %b %d' }}</span>, [{{ post.title }}]({{ post.url }})  
{% endfor %}

<img id="purdy" src="{{ '/assets/images/purdy.jpg' | relative_url }}">
