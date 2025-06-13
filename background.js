chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && tab.mutedInfo && tab.mutedInfo.muted) {
    chrome.tabs.update(tabId, { muted: false }, () => {
      if (chrome.runtime.lastError) {
        console.warn("Failed to unmute tab:", chrome.runtime.lastError.message);
      } else {
        console.log("Tab unmuted:", tabId);
      }
    });
  }
});
