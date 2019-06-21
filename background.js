chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    chrome.tabs.executeScript({
      file: 'replace.js'
    });
    // chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});