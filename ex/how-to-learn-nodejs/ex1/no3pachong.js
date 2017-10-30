var express = require('express')
    //抓取网页
var superagent = require('superagent')
    // cheerio 分析网页,nodejs版本jquery
var cheerio = require('cheerio')
var app = express()

app.get('/', (req, res) => {
    superagent.get('https://cnodejs.org/')
        .end((err, sres) => {
            if (err) {
                return next(err)
            }
            // sres.text 里面存储着网页的 html 内容，将它传给 cheerio.load 之后
            // 就可以得到一个实现了 jquery 接口的变量，我们习惯性地将它命名为 `$`
            // 剩下就都是 jquery 的内容了
            var $ = cheerio.load(sres.text)
            var items = []
            $('#topic_list .topic_title').each((idx, ele) => {
                var $ele = $(ele)
                items.push({
                    title: $ele.attr('title'),
                    href: $ele.attr('href')
                })
            })
            res.send(items)

        })
})
app.listen(3000, () => {
    console.log("成功创建http.createServer,并 监听成功")
})