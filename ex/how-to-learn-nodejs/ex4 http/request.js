var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringif({
    'content':'一起期待下一期的课程',
    'cid':348
})

var options ={
    hostname:'www.imooc.com',
    port : 80,
    path: 'course/do'
}