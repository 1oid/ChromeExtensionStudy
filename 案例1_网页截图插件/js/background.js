chrome.browserAction.onClicked.addListener(function(a) {
	var tabid = a.id;
	
	
	chrome.tabs.executeScript(tabid, {
		file: "js/html2canvas.js"
	}, function(a){});
	
	chrome.tabs.executeScript(tabid, {
		file: "js/canvas2image.js"
	}, function(a){});
	
	chrome.tabs.executeScript(tabid, {
		file: "js/capture.js"
	}, function(a) {})
	
});

chrome.runtime.onMessage.addListener(function(message, sender, response) {
	chrome.downloads.download({
		url: message.src,
		filename: message.filename
	}, function(c) {
		
	})
})