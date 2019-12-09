/**
 * subtitleViewer - 字幕檢視器部份
 */

let lastSubtitle = '' // 目前的字幕
const subtitleViewer = document.getElementsByClassName('player-subtitle')
const str_noSelected = '' // 請確保與上方 HTML 一致。
const subtListener = e => {
  for (let i of subtitleViewer) {
    if (i.dataset.subt || i.dataset.subt !== '') // 如果字幕是空的，就別放進去 lastSubtitle
      lastSubtitle = i.dataset.subt // 上一條歌詞

    i.dataset.subt = e.target.activeCues.length > 0 ?
      e.target.activeCues[0].text :
      '' // 本條歌詞

    i.innerHTML = `
      <span style='opacity: 50%'>${lastSubtitle || '' /* 防止 undefined 問題*/ }</span> <!-- 上一條歌詞 -->
      <br>🎤 ${i.dataset.subt} <!-- 本條歌詞 -->
    `
  }
}
function noSubt() { // 當沒字幕時
  for (let i of subtitleViewer) {
    i.innerHTML = str_noSelected
  }
}
