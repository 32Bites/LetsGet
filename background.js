chrome.storage.sync.get('enabled', function(data) {
    if (data.enabled === undefined) {
        chrome.storage.sync.set({enabled: true}, null);
    }
});

chrome.runtime.onMessage.addListener(function (url) {
    chrome.downloads.download({
        'url': url
    });
});