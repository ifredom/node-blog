module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/login');
  });
  app.use('/login', require('../controller/login')); // 登陆
  app.use('/register', require('../controller/register')); // 注册
  app.use('/home', require('../controller/home')); // 主页

  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404).render('404');
    }
  });
};