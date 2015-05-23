chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text && (msg.text == "download_media")) {
      var type = ''
      var type_properties = document.querySelectorAll('head meta[property="og:type"]');
      if (type_properties.length == 1) {
        type = type_properties[0].content;
      }

      var downloadLink = ''
      switch(type) {
      case "video":
        downloadLink = document.querySelectorAll('head meta[property="og:'+ 'video' +'"]')[0].content;
        break;
      case "profile":
      case "instapp:photo":
      default:
        downloadLink = document.body.querySelectorAll(".lfFrame")[0].getAttribute("src");
        if (downloadLink === null) {
          downloadLink = document.body.querySelectorAll(".utiImage")[0].getAttribute("src");
        }
        break;
        //
      }

      sendResponse( downloadLink );
    }
});