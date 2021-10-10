const enabled_box = document.getElementById('enabled');

chrome.storage.sync.get('enabled', function(data) {
    var enabled = false;
    // I should clean this up.
    if (data === undefined) {
        chrome.storage.sync.set({enabled: true}, null);
        enabled = true;
    } else {
        if (data.enabled === undefined) {
            chrome.storage.sync.set({enabled: true}, null);
            enabled = true;
        } else {
            enabled = data.enabled;
        }
    }
    if (enabled) enabled_box.setAttribute("checked", "");
});

enabled_box.addEventListener('click', function() {
    chrome.storage.sync.get('enabled', function(data) {
        var enabled = false;
        if (data === undefined || data.enabled === undefined) {
            chrome.storage.sync.set({enabled: true});
            enabled = true;
        } else {
            enabled = data.enabled;
        }

        if (enabled) enabled_box.setAttribute("checked", "");
        // else enabled_box.removeAttribute("checked");
        chrome.storage.sync.set({enabled: !enabled}, null);
    });
});