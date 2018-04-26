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
