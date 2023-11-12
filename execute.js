// this code will be executed when the extension's button is clicked

;(function () {
  const href = window.location.href
  const hrefSplit = href.split("/")

  // Check if website is YouTube and it's on "Shorts"
  if (!hrefSplit[2].includes("www.youtube.com")) return
  if (!hrefSplit[3].includes("shorts")) return

  const videoId = hrefSplit[hrefSplit.length - 1]

  window.location.replace(`https://www.youtube.com/watch?v=${videoId}`)
})()
