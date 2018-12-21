;(function(window) {
  window.DocsifyCodefund = {
    create: function(codefundId) {
      return function(hook, vm) {
        hook.ready(function() {
          window.DocsifyCodefund.injectCodeFundContainer();
          window.DocsifyCodefund.injectCodeFundScript(codefundId);
        })
      }
    },

    injectCodeFundContainer() {
      let nav = document.getElementsByClassName('sidebar-nav')
      let codefundContainer = document.createElement('div')
      codefundContainer.id = 'codefund'
      nav[0].insertBefore(codefundContainer, nav[0].firstChild)

      if (document.getElementsByClassName('cf-wrapper').length === 0) {
        window._codefund && window._codefund.serve();
      }
    },

    injectCodeFundScript(codefundId) {
      var script = document.createElement('script')
      script.src = "https://codefund.app/properties/" + codefundId + "/funder.js?template=docsify"
      script.async = "async"
      document.body.appendChild(script)
    }
  }
})(window)