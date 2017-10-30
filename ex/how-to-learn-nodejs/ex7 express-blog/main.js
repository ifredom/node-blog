/*
* @Author: ifredom
* @Date:   2017-10-26 13:37:43
* @Last Modified time: 2017-10-26 16:29:28
*/

var http = require('http');
var url = require("url");

var devConfig = require('./config/dev.conf')
var router = require('./router/router')

http.createServer(function (request, response) {

    var pathname = url.parse(request.url).pathname;
    console.log(pathname)

    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});


    var data = {
        "nama":'bobo',
        "sex": 'man'
    }

    // 发送响应数据
    var objToStr = JSON.stringify(data)


    router(pathname)


}).listen(devConfig.port);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');