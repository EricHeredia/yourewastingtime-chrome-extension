chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
      //chrome.tabs.executeScript({
      //  file: 'replace.js'
      //});
    }
  }
)

setTimeout(() => {
  chrome.runtime.sendMessage({"message": "play_pause", "status": "play"});
}, 5000)
