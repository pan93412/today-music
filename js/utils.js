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
