
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg.text && (msg.text == "download_media")) {
      var downloadLink = downloadLink = document.querySelectorAll('head meta[property="og:'+ 'image' +'"]')[0].content;

      sendResponse( downloadLink );
    }
});