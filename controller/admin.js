var sha1 = require('sha1')
var express = require('express')
var formidable = require('formidable')
var router = express.Router()

/* GET /admin. */
router.get('/', (req, res, next) => {
  res.render('adminpage/page/home/home', {
    title: '管理后台首页'
  })
  res.end()
})
/* GET /admin/article/add. */
router.get('/article/add', (req, res, next) => {
  res.render('adminpage/page/addarticle/index', {
    title: '文章'
  })
  res.end()
})

router.post('/article/add', (req, res, next) => {
  console.log(req.body)
  res.json({
    statusCode: 200,
    msg: '添加成功'
  }).end()
})
module.exports = router
