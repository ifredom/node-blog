var sha1 = require('sha1');
var express = require('express');
var formidable = require('formidable');
var router = express.Router();


router.get('/', (req, res, next) => {
  res.render('frontend/page/blog/blog', {
    title: 'ifredom博客主页'
  });
  res.end();
});

/* GET /blog/article. */
router.get('/article', (req, res, next) => {
  res.render('frontend/page/article/index', {
    title: '文章'
  });
  res.end();
});
// 测试接口
router.get('/test', (req, res, next) => {
  console.log("这里test");

  res.json({
    baby: "hehe"
  });
  // res.end();
});

module.exports = router;
