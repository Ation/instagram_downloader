chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text && (msg.text == "download_media")) {
      var video_tag = document.querySelectorAll('video');
      var download_link = '';

      if (video_tag.length == 1) {
        download_link = video_tag[0].getAttribute("src");
      } else {
        //root = document.body.querySelectorAll('div.-cx-PRIVATE-Photo__root.-cx-PRIVATE-Post__media')
        root = document.body.querySelectorAll('._ovg3g')
        /*if (root.length == 0) {
            root = document.body.querySelectorAll('div.-cx-PRIVATE-Photo__root.-cx-PRIVATE-PhotoWithUserTags__photo')
        }
        img = root[0].querySelectorAll('img.-cx-PRIVATE-Photo__image')
        download_link = img[0].getAttribute('src');*/
          var src = root[0].getAttribute('data-reactid').split('https=2//');
          var download_link_decode = src[1].replace(/=1/g, '.');
          if (download_link_decode.includes('jpg')){
              download_link = 'https://' + download_link_decode.split('.jpg')[0] + '.jpg'
          } else
            download_link = 'https://' + download_link_decode.split('.gif')[0] + '.gif'
      }

      sendResponse(download_link);
    }
});
