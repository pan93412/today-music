/* Meta 中繼設定 */
const pageMetaOptions = {
  titleTag: '每日推薦音樂', // <title> 標籤的內容
  title: '每日推薦音樂<sup>α</sup>', // 標題
  subtitle: `` // 副標題
}

/* 音樂列表 */
const db = {
  current: '音樂 ID', // 預設選取音樂
  list: {
    '音樂 ID': {
      displayName: '音樂顯示名稱',
      albumImage: '專輯圖片連結', // 可選，若不需要請刪除這行
      audioFile: '音樂檔案連結',
      subtitle: '字幕檔案 (vtt) 連結' // 可選，若不需要請刪除這行
    }
  }
}
