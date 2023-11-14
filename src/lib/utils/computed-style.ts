export function getComputedStyle(el: HTMLElement, styleProp: string): string {
  var value,
    defaultView = (el.ownerDocument || document).defaultView
  styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase()
  return (defaultView as Window & typeof globalThis).getComputedStyle(el, null).getPropertyValue(styleProp)
}

export function injectStyle(style: string) {
  ;(document.querySelector('style') as HTMLElement).innerHTML += style
}
