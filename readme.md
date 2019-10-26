##### testing locally

```sh
docker run --rm \
    --volume "$PWD:/srv/jekyll" \
    --volume "$PWD/vendor/bundle:/usr/local/bundle" \
    --publish '4000:4000' \
    -it 'jekyll/jekyll:3.8' \
    bundler exec jekyll serve --host 0.0.0.0
```
