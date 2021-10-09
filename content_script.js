function run() {
    if (document.getElementById('raw-dl')) {
        return;
    }
    const raw = document.getElementById('raw-url');
    if (raw) {
        const el = document.createElement('button');
        el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" class="octicon octicon-device-desktop"><path fill-rule="evenodd" d="M7.47 10.78a.75.75 0 001.06 0l3.75-3.75a.75.75 0 00-1.06-1.06L8.75 8.44V1.75a.75.75 0 00-1.5 0v6.69L4.78 5.97a.75.75 0 00-1.06 1.06l3.75 3.75zM3.75 13a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5z"></path></svg>';
        el.onclick = function () {
            chrome.runtime.sendMessage(window.location.protocol + window.location.host + raw.getAttribute('href'));
        };
        el.setAttribute('data-platforms', 'windows,mac');
        el.setAttribute('aria-label', 'Download this file');
        el.setAttribute('id', 'raw-dl');
        el.classList.add('btn-octicon', 'tooltipped', 'tooltipped-nw', 'js-remove-unless-platform');
        const bar = raw.parentElement.parentElement.lastChild.previousSibling;
        bar.insertBefore(el, bar.firstChild);
    }
}
document.addEventListener('pjax:success', function () {
    run();
});

run();