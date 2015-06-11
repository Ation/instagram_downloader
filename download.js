chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text && (msg.text == "download_media")) {
      var video_tag = document.querySelectorAll('video');
      var download_link = '';

      if (video_tag.length == 1) {
        download_link = video_tag[0].getAttribute("src");
      } else {
        divs = document.body.querySelectorAll('div.-cx-PRIVATE-Photo__root')
        download_link = divs[divs.length - 1].getAttribute('src');
      }

      sendResponse(download_link);
    }
});