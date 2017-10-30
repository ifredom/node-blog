var express = require('express')
var app = express()

app.get('/', (req, res) => {
    console.log("访问默认index页面")
})
app.listen(3000, () => {
    console.log("成功创建http.createServer,并 监听成功")
})