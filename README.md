# docsify-plugin-codefund（deprecated）
a plugin to make you easy to join up [CodeFund](https://codefund.app/)

> codefund is shut down, so this plugin is deprecated.
# Usage
```
https://unpkg.com/docsify-plugin-codefund/index.js
```

```
window.$docsify = {
  coverpage: true,
  name: 'vue-data-tables',
  repo: 'https://github.com/njleonzhang/vue-data-tables',
  subMaxLevel: 2,
  loadSidebar: true,
  disqus: 'vueDataTables',
  search: 'auto', // default

  plugins: [
    DocsifyCodefund.create(15) // change to your CodeFund property id
  ]
}
```

# Sample
https://njleonzhang.github.io/vue-data-tables/

![9e682cb3-ac97-45af-b205-71f43a12f57e](https://user-images.githubusercontent.com/13174059/39339240-3c8f577c-49fa-11e8-9bfd-7896f877b128.png)
