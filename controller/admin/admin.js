var sha1 = require('sha1')
var express = require('express')
var formidable = require('formidable')
var router = express.Router()


router.get('/', (req, res, next) => {
  res.render('adminpage/page/articleadd/add', {
    title: '管理后台首页'
  })
  res.end()
})


module.exports = router
