var sha1 = require('sha1')
var express = require('express')
var formidable = require('formidable')
var router = express.Router()

/* GET /admin. */
router.get('/', (req, res, next) => {
  res.render('adminpage/home/blog', {
    title: 'ifredom博客主页'
  })
  res.end()
})
/* GET /blog/add. */
router.get('/add', (req, res, next) => {
  res.render('adminpage/page/article/index', {
    title: '文章'
  })
  res.end()
})

module.exports = router
