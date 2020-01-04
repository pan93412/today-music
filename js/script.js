/**
 * main - 主程式
 */

/* 標題 / 副標題 */
const pageMeta = {
  titleTag: document.getElementsByClassName('theme-title-tag'), // <title>
  title: document.getElementsByClassName('theme-title'), // 標題
  subtitle: document.getElementsByClassName('theme-subtitle') // 副標題
} // 請確保項目名稱與 today.js -> pageMetaOptions 的一致！

/* Main */
for (let i in db.list) { // 新增 today.js 內的音樂至音樂列表
  elemId.push('m-' + i)
  musicList.innerHTML += `
<tr id='m-${i}'>
  <td>${db.list[i].displayName}</td>
  <td class='info-td'>
    <a href='#m-${i}-listen'><i class='icon-export'></i></a>
    <a id='m-${i}-listen' href='javascript:void(0)' data-id='${i}'><i class='icon-play-circled'></i></a>
  </td>
</tr>`
}

for (let i of elemId) { // 對音樂列表的每個東西都加上事件
  document.getElementById(i + '-listen').addEventListener('click', e => {
    switchTo(e.currentTarget.dataset.id) /* r: musicList.js */
    player.play()
  })
  document.getElementById(i).addEventListener('click', e => {
    select(document.getElementById(e.currentTarget.id)) /* r: musicList.js */
  })
}

switchTo(db.current) // 預設播放項目就是 db.current 喔 /* r: today.js */

for (let i in pageMeta) {
  setAllElementInnerHTML(pageMeta[i], pageMetaOptions[i]) /* r: utils.js */
} // 設定 Meta
