var displayPageAction = function (tabId, changeInfo, tab) {
    if (tab.url.match("^https?://instagram.com/.")) {
      //chrome.extension.getBackgroundPage().console.log(tab.url);
      chrome.pageAction.show(tabId);
    }
};

chrome.tabs.onUpdated.addListener(displayPageAction);