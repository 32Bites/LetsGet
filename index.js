const my_page = document.getElementById('my_page');
my_page.addEventListener('click', function () {
    chrome.tabs.create({
        url: my_page.getAttribute('href') ?? 'https://github.com/32Bites/'
    });
});

const version = document.getElementById('version');
version.innerText = "Let's Get v" + chrome.runtime.getManifest().version;

const enabled_box = document.getElementById('enabled');
chrome.storage.sync.get('enabled', function (data) {
    var enabled = false;
    if (data === undefined || data.enabled === undefined) {
        chrome.storage.sync.set({
            enabled: true
        }, null);
        enabled = true;
    } else {
        enabled_box = data.enabled;
    }
    if (enabled) enabled_box.setAttribute("checked", "");
});

enabled_box.addEventListener('click', function () {
    chrome.storage.sync.get('enabled', function (data) {
        var enabled = false;
        if (data === undefined || data.enabled === undefined) {
            chrome.storage.sync.set({
                enabled: true
            });
            enabled = true;
        } else {
            enabled = data.enabled;
        }

        if (enabled) enabled_box.setAttribute("checked", "");
        // else enabled_box.removeAttribute("checked");
        chrome.storage.sync.set({
            enabled: !enabled
        }, null);
    });
});