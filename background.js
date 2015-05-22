var displayPageAction = function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete') {
    if (tab.url.match("^https?://instagram.com/.")) {
      //chrome.extension.getBackgroundPage().console.log(tab.url);
      chrome.pageAction.show(tabId);
    }
  }
};

chrome.tabs.onUpdated.addListener(displayPageAction);

function downloadFile(downloadURL) {
    console.log("I received the following DOM content:\n" + downloadURL);
}

chrome.pageAction.onClicked.addListener(function(tab){
  chrome.extension.getBackgroundPage().console.log("click");
  chrome.tabs.sendMessage(tab.id, { text: "download_media" }, downloadFile);
});