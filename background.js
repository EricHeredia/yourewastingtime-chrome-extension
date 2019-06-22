chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var activeTab = tabs[0];
    //chrome.tabs.executeScript({
    //  file: 'replace.js'
    //});
    // chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
  });
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    
    if( request.message === "play_pause" ) {
      
      chrome.tabs.executeScript({
        file: 'replace.js'
      });
    }
  })
  }
);
