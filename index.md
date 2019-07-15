---
layout: default
title: senan kelly
---

# about
-- {% include tagline.md %}
-- **[more]({{ '/about' | relative_url }})**

# pages
-- [music search]({{ '/music_search' | relative_url }})  
-- [sem]({{ '/sem' | relative_url }})

# blog posts
{% for post in site.posts -%}
  -- <span class="date">{{ post.date | date: '%Y %b %d' }}</span>, [{{ post.title }}]({{ post.url }})  
{% endfor %}

<img id="purdy" src="{{ '/assets/images/purdy.jpg' | relative_url }}">
