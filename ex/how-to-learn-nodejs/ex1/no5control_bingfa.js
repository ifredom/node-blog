var async = require('async');

var concurrencyCount = 0;
var fetchUrl = function(url, callback) {
    var delay = parseInt(Math.random() * 10000000 % 2000, 10);
    concurrencyCount++;
    console.log("现在的并发数是：" + concurrencyCount + "，正在抓取的是:" + url + " 耗时: " + delay)
    setTimeout(function() {
        concurrencyCount--;
        callback(null, url + ' html content')
    }, delay)
}
var urls = [];
for (let i = 0; i < 30; i++) {
    urls.push('http://datasource_' + i)
}
console.log(urls)

async.mapLimit(urls, 5, (url, callback) => {
    fetchUrl(url, callback)
}, (err, result) => {
    console.log('final: ')
    console.log(result)
})