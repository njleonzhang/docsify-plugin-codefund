;(function(window) {
  window.DocsifyCodefund = {
    create: function(codefundId) {
      return function(hook, vm) {
        hook.ready(function() {
          window.DocsifyCodefund.injectCodeFundStyle();
          window.DocsifyCodefund.injectCodeFundScript(codefundId);
        })

        hook.doneEach(function () {
          window.DocsifyCodefund.injectCodeFundContainer();
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
    },

    injectCodeFundStyle() {
      var style = document.createElement('style');
      window.DocsifyCodefund.injectCodeFundContainer();
      var css = '#cf span.cf-wrapper { background-color: transparent!important } #cf a.cf-text { color: #444!important; font-weight: 400!important; font-size: 10px!important }';

      style.type = 'text/css';
      if (style.styleSheet){
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }
      document.head.appendChild(style);
    }
  }
})(window)
