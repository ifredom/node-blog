var sha1 = require('sha1')
var express = require('express')
var formidable = require('formidable')
var router = express.Router()

/* GET /blog. */
router.get('/', (req, res, next) => {
  res.render('frontend/page/blog/blog', {
    title: 'ifredom博客主页'
  })
  res.end()
})
/* GET /blog/article. */
router.get('/article', (req, res, next) => {
  res.render('frontend/page/article/index', {
    title: '文章'
  })
  res.end()
})

module.exports = router
