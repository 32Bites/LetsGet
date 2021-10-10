const enabled_box = document.getElementById('enabled');

chrome.storage.sync.get('enabled', function(data) {
    var enabled = data.enabled;
    if (data.enabled === undefined) {
        chrome.storage.sync.set({enabled: true}, null);
        enabled = true;
    }
    if (enabled) enabled_box.setAttribute("checked", "");
});

enabled_box.addEventListener('click', function() {
    chrome.storage.sync.get('enabled', function(data) {
        if (data.enabled) enabled_box.setAttribute("checked", "");
        // else enabled_box.removeAttribute("checked");
        chrome.storage.sync.set({enabled: !data.enabled}, null);
    });
});