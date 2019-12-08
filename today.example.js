/* 設定 */
const titleTag = '每日推薦音樂' // <title> 標籤的內容 
const title = '每日推薦音樂<sup>0.1α</sup>' // 標題
const subtitle = '' // 副標題

/* 音樂列表 */
const db = {
  current: '音樂 ID', // 預設選取音樂
  list: {
    '音樂 ID': {
      displayName: '音樂顯示名稱',
      albumImage: '專輯圖片連結', // 可選，若不需要請改成 `''`
      audioFile: '音樂檔案連結',
      subtitle: 'music/20191208-Mili-UFO.en.vtt'
    }
  }
}
