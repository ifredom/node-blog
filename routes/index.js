module.exports = function (app) {
    app.get('/', function (req, res) {
        res.redirect('/login');
    });
    app.use('/login', require('./login'));
    app.use('/posts', require('./posts'));
    // app.use('/signup', require('./signup'));
    // app.use('/signin', require('./signin'));
    // app.use('/signout', require('./signout'));
    // app.use('/posts', require('./posts'));
  
    // 404 page
    app.use(function (req, res) {
      if (!res.headersSent) {
        res.status(404).render('404');
      }
    });
  };
  
