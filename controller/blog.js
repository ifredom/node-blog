var sha1 = require('sha1');
var express = require('express');
var formidable = require('formidable');
var router = express.Router();

/* GET /index. */
router.get('/', (req, res, next) => {
  res.render('page/blog/blog', {
    title: 'ifredom-Blog 登陆'
  })
  res.end();
});

module.exports = router;