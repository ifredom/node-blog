// var express = require('express')
// var router = express.Router()

// var checkNotLogin = require('../middlewares/check').checkNotLogin
// /* GET home page. */
// router.get('/', checkNotLogin, (req, res, next)=> {
//   res.render('index', { title: 'Express-title-5' })
// });

// module.exports = router


module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'Express-title-5' })
    });
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
  
