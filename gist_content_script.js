function run() {
    const documents = document.getElementsByClassName('btn-sm btn');
    for (var i = 0; i < documents.length; i++) {
        const doc = documents[i];
        if (doc.parentElement === null) continue;
        if (doc.innerHTML.includes('Raw') && doc.parentElement.classList.contains('file-actions') && !doc.getAttribute('injected')) {
            const el = document.createElement('button');
            el.innerText = "Download";
            el.onclick = function () {
                chrome.runtime.sendMessage(window.location.protocol + window.location.host + doc.getAttribute('href'));
            };
            el.classList.add('btn', 'btn-sm');
            el.setAttribute('style', 'margin-right:0.5em;');

            doc.parentElement.insertBefore(el, doc);
            doc.setAttribute('injected', 'injected-by-lets-get');
        }
    }
}

document.addEventListener('pjax:success', function () {
    run();
});
run();