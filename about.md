---
layout: default
title: about
---

# about
-- {% include tagline.md %}

# programming ([github](https://github.com/sentriz))
-- python 3, flask, sqlalchemy, gevent, more  
-- go, docker, kubernetes  
-- vue, es6, etc  
-- shell  
-- some java

# music ([lastfm](https://www.last.fm/user/sentriz))
-- [beefheart](http://open.spotify.com/album/0dfhgsfkg7g58cke33glah), [zappa](http://open.spotify.com/artist/6ra4giogczqzmoauecftgn)  
-- [canterbury scene](https://en.wikipedia.org/wiki/canterbury_scene)  
-- [cardiacs](https://www.youtube.com/watch?v=gNdnOTvGbJQ)  
-- [the fall](https://www.youtube.com/watch?v=YgA6v3DORY4)  
-- [ariel pink](https://www.youtube.com/watch?v=q05ERtorg4c&list=PLF4B81C8B3D576A63), [john maus](https://www.youtube.com/watch?v=4mxQJyjDrOM)  
-- [uzic.ch](http://stream.uzic.ch:9010/), [psychedelicized](http://199.58.160.146:8006/), [6 music](http://bbcmedia.ic.llnwd.net/stream/bbcmedia_6music_mf_p?s=1469283931&e=1469298331&h=4423c0d9919cfee73a82c1de6178bc84)  


# setup ([dotfiles](https://github.com/sentriz/dotfiles))
{% for item in site.data.setup -%}
   -- {% if item.link %}
          [{{ item.name }}]({{ item.link }})  
      {% else %}
          {{ item.name }}  
      {% endif %}
{%- endfor %}   


# irc
-- freenode (#python, #go-nuts, #vim, #git)  
-- geekshed
-- espernet (#renoise)  
-- blinkenshell  
