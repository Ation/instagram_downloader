chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text && (msg.text == "download_media")) {
      var video_tag = document.querySelectorAll('video');
      var download_link = '';

      if (video_tag.length == 1) {
        download_link = video_tag[0].getAttribute("src");
      } else {
        root = document.body.querySelectorAll('div.-cx-PRIVATE-Modal__contents')
        img = root[0].querySelectorAll('img.-cx-PRIVATE-Photo__image')
        download_link = img[0].getAttribute('src');
      }

      sendResponse(download_link);
    }
});