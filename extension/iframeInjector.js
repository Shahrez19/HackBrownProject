var iFrame = document.createElement("iframe");
iFrame.setAttribute("style", "position: fixed; z-index: 2000; width:100%; height:100%; border-style: none;");
iFrame.src = chrome.extension.getURL("embed.htm");
document.body.insertBefore(iFrame, document.body.firstChild);
addEventListener('message', function (ev) {
    if (ev.data === 'closeIframe') {
        iFrame.parentNode.removeChild(iFrame); // Your code
    }
});