var iFrame = document.createElement("iframe");
iFrame.setAttribute("style", "position: fixed; z-index: 2000; width:100%; height:100%; margin: 0 0 0 -40%;left:50%; padding: 0 0 0 0; border-style: none");
iFrame.src = chrome.extension.getURL("embed.htm");

document.body.insertBefore(iFrame, document.body.firstChild);