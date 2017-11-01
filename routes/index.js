module.exports = function (app) {
    // app.use('/', require('./login'));
    app.use('/login', require('./login'));
    app.use('/posts', require('./posts'));
    // app.use('/signout', require('./signout'));
    // app.use('/register', require('./register'));

    // 404 page
    app.use(function (req, res) {
      if (!res.headersSent) {
        res.status(404).render('404');
      }
    });
  };
  
