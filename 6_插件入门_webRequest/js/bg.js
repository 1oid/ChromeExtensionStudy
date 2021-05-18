var callback = function(details) {
    // 修改cookie为lalal字符
    var headers = details.requestHeaders;
    
    for(var index in headers) {
        var header = headers[index];
        // 修改Cookie
        if(header.name == 'Cookie') {
            header.value = "lalal"
        }
    }
    return {requestHeaders: headers}
}

// 允许捕获所有的 url
var filter = {
    urls: ["<all_urls>"]
}
var opt_extraInfoSepc = [
    "blocking", "requestHeaders", "extraHeaders"
]

// 监听 请求头发送之前
chrome.webRequest.onBeforeSendHeaders.addListener(
    callback, filter, opt_extraInfoSepc
)