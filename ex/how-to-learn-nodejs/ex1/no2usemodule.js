var express = require('express')
var utility = require('utility')
var app = express()

app.get('/', (req, res) => {
    var q = req.query.q
    var md5Val = utility.md5(q)
    var sha1Val = utility.sha1(q)
    console.log("md5Val: ", md5Val)
    console.log("sha1Val: ", sha1Val)
    res.send(md5Val);
})
app.listen(3000, () => {
    console.log("成功创建http.createServer,并 监听成功")
})