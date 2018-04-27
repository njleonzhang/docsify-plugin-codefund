# docsify-plugin-codefund
a plugin to make you easy to join up [codefund](https://codesponsor.io/)

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
  search: 'auto', // default,

  plugins: [
    DocsifyCodefund.create('51d43327-eea3-4e27-bd44-e075e67a84fb') // change to your codefund id
  ]
```

# Sample
https://njleonzhang.github.io/vue-data-tables/

![9e682cb3-ac97-45af-b205-71f43a12f57e](https://user-images.githubusercontent.com/13174059/39339240-3c8f577c-49fa-11e8-9bfd-7896f877b128.png)


