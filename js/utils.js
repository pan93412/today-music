/**
 * utils - 工具函式部份
 * 務必先載入這 JS 再載入其他 JS，否則會出問題……
 */

/**
 * 將所有元素的 innerHTML 設為指定值。
 *
 * @param {HTMLElement} elem 元素
 * @param {string} to 設成？
 */
function setAllElementInnerHTML(elem, to) {
  for (let i of elem) i.innerHTML = to
}

/**
 * 淡入淡出。
 * 
 * 假如已經淡入過，那再次執行則為淡出。反之亦然。
 * 
 * @param {HTMLElement} elem 元素
 */
function fade(elem) {
  if (elem.classList.contains('fade-hide')) {
    elem.classList.remove('fade-hide')
    elem.classList.add('fade-show')
    return null
  } else if (elem.classList.contains('fade-show')) {
    elem.classList.remove('fade-show')
  }
  elem.classList.add('fade-hide')
  return null
}
