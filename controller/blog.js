var sha1 = require('sha1');
var express = require('express');
var formidable = require('formidable');
var router = express.Router();

// app.render(view,  [locals],  callback);
// view： 模板文件名；
// [locals]： 一个locals对象（即在app.locals中定义的locals对象）。
// callback： 回调函数，在模板呈现后执行。接受两个参数。第一个，err-错误对象。第二个, renderedData——呈现后的模板字符串。
/* GET /blog. */
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

module.exports = router;
