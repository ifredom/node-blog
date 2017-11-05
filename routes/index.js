module.exports = function(app) {
    app.get('/', function(req, res) {
        res.redirect('/login');
    });

    app.use('/home', require('../controller/home')); // 主页
    app.use('/login', require('../controller/login')); // 登陆
    app.use('/register', require('../controller/register')); // 注册


};