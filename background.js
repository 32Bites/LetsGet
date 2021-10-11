chrome.runtime.onMessage.addListener(function (url) {
    chrome.downloads.download({
        'url': url
    });
});