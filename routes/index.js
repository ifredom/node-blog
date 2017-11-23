module.exports = function(app) {
    app.get('/', function(req, res) {
        res.redirect('/login');
    });
    app.param('id', function (req, res, next, id) {
        console.log('CALLED ONLY ONCE');
        next();
    })
    app.use('/blog', require('../controller/blog'));
    app.use('/movie', require('../controller/movie')); // 电影
    app.use('/login', require('../controller/login')); // 登陆
    app.use('/register', require('../controller/register')); // 注册

};