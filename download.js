chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text && (msg.text == "download_media")) {
      var type = document.querySelectorAll('head meta[property="og:type"]')[0].content;
      var downloadLink = ''
      switch(type) {
      case "video":
        downloadLink = document.querySelectorAll('head meta[property="og:'+ 'video' +'"]')[0].content;
        break;
      case "profile":
      case "instapp:photo":
        downloadLink = document.body.querySelectorAll(".lfFrame")[0].getAttribute("src");
        if (downloadLink === null) {
          downloadLink = document.body.querySelectorAll(".utiImage")[0].getAttribute("src");
        }
        break;
      default:
        //
      }

      sendResponse( downloadLink );
    }
});