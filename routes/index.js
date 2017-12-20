var cors = require('cors')  // 测试跨域

module.exports = function(app) {

    app.get('/', function(req, res) {
        res.redirect('/login')
    })

    app.use('/login', require('../controller/login')) // 登陆
    app.use('/register', require('../controller/register')) // 注册
    app.use('/blog', require('../controller/blog')) // 博客首页
    app.use('/movie', require('../controller/movie')) // 电影
    app.use('/admin', require('../controller/admin')) // 管理后台
}
