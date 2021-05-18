### chrome.webRequest [官方文档](https://developer.chrome.com/extensions/webRequest)

> 可以用来分析、拦截、追踪、修改请求/响应

### 请求的生命周期

![Request的生命周期](https://developer.chrome.com/static/images/webrequestapi.png)

### 部分事件说明

+ `onBeforeRequest`发送请求之前
+ `onBeforeSendHeaders` 在发送请求头之前
+ `onSendHeaders` 在发送请求头的时候
+ `onCompleted` 请求完成后



### 注册监听事件

```javascript
// 回调函数
var callback = function(details) {...};
// URLs\Types\Tab ID\Window ID
var filter = {...};
// 其他信息
var opt_extraInfoSpec = [...];

chrome.webRequest.onXXXXXX.addListener(callback, filter, opt_extraInfoSpec)
```



### 例子

```javascript
chrome.webRequest.onBeforeRequest.addListener(function(details) {
          console.log(details);
          return {cancel: details.url.indexOf("://www.evil.com/") != -1};
},{urls: ["<all_urls>"]}, ["blocking"]);
```



> 配套
> 我忘记这节课讲的啥了，所以，就凑合看看文档，不懂得就B站或者QQ私聊我