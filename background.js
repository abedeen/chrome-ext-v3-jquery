console.log("background7!");
window.onload = function() {
  // Your code to be executed after the page loads completely
  console.log("Page loaded completely!");
  const allDivs = $('div');

  // Option 1: Log the total number of divs
  console.log("Total divs:", allDivs.length);
};
/*
$(document).ready(function() {
    const allDivs = $('div');
    // Process the divs as needed (limited functionality due to content script restrictions)
    console.log(allDivs.length); // Example: log the number of divs
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "notify",
    title: "Notify!: %s",
    contexts: ["selection"],
  });
});
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') { // Check for complete loading and specific URL patterns
        // Your code to run on page refresh
        console.log('Page refreshed!');
        coneole.log(tab.url);
    }
});
chrome.contextMenus.onClicked.addListener((info, tab) => {
  if ("notify" === info.menuItemId) {
    console.log("wokring.....");
    notify(info.selectionText);
  }
});

chrome.runtime.onMessage.addListener((data) => {
  if (data.type === "notification") {
    notify(data.message);
  }
});

const notify = (message) => {
  chrome.storage.local.get(["notifyCount"], (data) => {
    let value = data.notifyCount || 0;
    chrome.storage.local.set({ notifyCount: Number(value) + 1 });
  });

  return chrome.notifications.create("", {
    type: "basic",
    title: "Notify!",
    message: message || "Notify!",
    iconUrl: "./assets/icons/icon128.png",
  });
};
*/
