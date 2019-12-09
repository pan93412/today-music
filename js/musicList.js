/**
 * musicList - 音樂清單部份
 * 部份與播放器相關的東西在 player.js
 */

let currentSelected = null
const musicList = document.getElementById('music-list')
const elemId = []

function select(toSelect) {
  if (currentSelected) currentSelected.classList.remove('is-selected')
  currentSelected = toSelect
  toSelect.classList.add('is-selected')
}

/**
 * 將播放器切換到？
 *
 * @param {string} musicID 音樂編號
 */
function switchTo(musicID) {
  const elemID = 'm-' + musicID // 預設元件 ID 就是 `#m-[音樂編號]`
  player.src = db.list[musicID].audioFile // 設定播放器 source
  setAllElementInnerHTML(currentPlaying, db.list[musicID].displayName) // 設定播放器標題
  bg.style.backgroundImage = `url('${db.list[musicID].albumImage || ''}')` // 將背景圖設成專輯圖

  if (db.list[musicID].subtitle) { // 如果有字幕的話……
    currentTrack.src = db.list[musicID].subtitle
    player.textTracks[0].addEventListener('cuechange', subtListener)
  } else {
    currentTrack.src = ''
    player.textTracks[0].removeEventListener('cuechange', subtListener)
    noSubt()
  }

  select(document.getElementById(elemID)) // 標示播放項目
}
