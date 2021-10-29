let color = "3AA757"; //green

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({ color });
    console.log(`Default background color set to ${color}`);
    
})