var express = require('express')
var moment = require('moment')
var router = express.Router()
var articleModel = require('../models/article/article')
/* GET /admin. */
router.get('/', (req, res, next) => {
  articleModel.find().limit(6).exec().then(function (article) {
    res.render('adminpage/page/home/home', {
      article: article
    });
  })
})
/* GET /admin/article/add. */
router.get('/article/add', (req, res, next) => {
  res.render('adminpage/page/addarticle/index', {
    title: '文章'
  })
  res.end()
})

// 分页查询文章列表
router.post('/', (req, res, next) => {
  var limit = parseInt(req.body.limit, 10)
  var offset = parseInt(req.body.offset, 10)

  articleModel.find().skip(offset).limit(limit).exec().then(function (article) {
    res.render('adminpage/page/home/home', {
      article: article
    })
  })
})

// 发布文章
router.post('/article/add', (req, res, next) => {
  var query = req.body
  var article = new articleModel(query)
  article.save(function(err){
    if(err){
      console.log(err)
    }
    res.send({
      statusCode: 200,
      msg: '发布成功',
      time: moment().format('YYYY-MM-DD')
    })
  })
})

module.exports = router
