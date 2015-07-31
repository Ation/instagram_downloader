chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text && (msg.text == "download_media")) {
      var video_tag = document.querySelectorAll('video');
      var download_link = '';

      if (video_tag.length == 1) {
        download_link = video_tag[0].getAttribute("src");
      } else {
        root = document.body.querySelectorAll('div.-cx-PRIVATE-Photo__root.-cx-PRIVATE-Post__media')
        placeholder = root[0].getElementsByClassName('-cx-PRIVATE-Photo__placeholder')
        img = placeholder[0].getElementsByTagName('img')
        download_link = img[0].getAttribute('src');
      }

      sendResponse(download_link);
    }
});