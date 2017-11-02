module.exports = function (app) {
  app.get('/', function (req, res) {
    res.redirect('/login');
  });
  app.use('/login', require('../controller/login'));
  app.use('/home', require('../controller/home'));

  // 404 page
  app.use(function (req, res) {
    if (!res.headersSent) {
      res.status(404).render('404');
    }
  });
};