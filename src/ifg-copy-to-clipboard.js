angular.module('ifg.copyToClipboard', [])
.directive('ifgCopyToClipboard', function() {
  return {
    retrict: 'A',
    scope: {
      ifgCopyToClipboard: '@',
      onCopy: '&'
    },
    link(scope, elem) {
      const _el = elem[0]
      const text = scope.ifgCopyToClipboard

      _el.addEventListener('click', (evt) => {
        const el = document.createElement('span')
        const range = document.createRange()
        const sel = window.getSelection()

        el.textContent = text
        el.style.position = 'fixed'
        el.style.width = '1px'
        el.style.height = '1px'
        el.style.opacity = 0

        document.body.appendChild(el)
        range.selectNode(el)
        sel.removeAllRanges()
        sel.addRange(range)

        document.execCommand('copy')
        sel.removeAllRanges()
        document.body.removeChild(el)
        if (scope.onCopy) scope.onCopy({ $event: evt })
      })
    }
  }
})
