module.exports = function(app) {
    app.get('/', function(req, res) {
        res.redirect('/login');
    });

    app.use('/blog', require('../controller/blog'));
    app.use('/movie', require('../controller/movie')); // 主页
    app.use('/login', require('../controller/login')); // 登陆
    app.use('/register', require('../controller/register')); // 注册
    app.use('/addmovie', require('../controller/addmovie')); // 添加电影

};