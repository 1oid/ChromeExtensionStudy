

html2canvas(document.querySelector("body")).then(canvas => {
	var title = document.querySelector("title").innerText;
	console.log(canvas.width);
	var timestamp = (new Date()).valueOf();
	var filename = prompt("输入文件名", timestamp + ".png");

	if(filename) {
		var image = Canvas2Image.convertToPNG(canvas, canvas.width, canvas.height);
		chrome.runtime.sendMessage({
			src: image.src,
			filename: filename
		}, function(response){
			
		});
	}
});