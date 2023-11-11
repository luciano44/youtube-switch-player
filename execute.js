// this code will be executed when the extension's button is clicked

;(function () {
  const href = window.location.href
  const hrefSplit = href.split("/")
  const videoId = hrefSplit[hrefSplit.length - 1]

  window.location.replace(`https://www.youtube.com/watch?v=${videoId}`)
})()
