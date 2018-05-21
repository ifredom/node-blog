var express = require('express');
var moment = require('moment');
var router = express.Router();
var errorHandle = require('./error');
var articleModel = require('../models/article/article');
/* GET /article. */
router.get('/', (req, res, next) => {
    articleModel
        .find()
        .limit(6)
        .exec()
        .then(function(articles) {
            res.render('backend/page/article/index', {
                articles: articles,
                baseUrl: '/'
            });
        });
});
/* GET /article/add. */
router.get('/add', (req, res, next) => {
    res.render('backend/page/article/index', {
        title: '文章',
        baseUrl: '/add'
    });
    res.end();
});

/* GET /article/id.查看文章 */
router.get('/:id', (req, res, next) => {
    var id = req.params.id;
    articleModel.findById(id, function(err, article) {
        if (err) {
            errorHandle(err);
        }
        res.render('backend/page/article/index', {
            article: article,
            createTime: moment(article.meta.createAt).format('MMMM Do YYYY'),
            baseUrl: ''
        });
    });
});
/* GET /article/update/:id.更新文章 */
router.get('/update/:id', (req, res, next) => {
    var id = req.params.id;
    articleModel.findById(id, function(err, article) {
        if (err) {
            errorHandle(err);
        }
        console.log(article);
        res.render('backend/page/article/index', {
            article: article,
            createTime: moment(article.meta.createAt).format('MMMM Do YYYY'),
            baseUrl: '/update'
        });
    });
});
// 发布文章
router.post('/add', (req, res, next) => {
    var query = req.body;
    var article = new articleModel({ readnum: 0, ...query });
    article.save(function(err) {
        if (err) {
            errorHandle(err);
        }
        res.send({
            statusCode: 200,
            msg: '发布成功',
            time: moment().format('YYYY-MM-DD')
        });
    });
});

router.delete('/del', (req, res) => {
    var id = req.body.id;

    if (id) {
        articleModel.where().findOneAndRemove((err, article) => {
            if (err) {
                errorHandle(err);
            } else {
                res.json({
                    statuscode: 200,
                    msg: '删除成功'
                });
            }
        });
    }
});

// 分页查询文章列表
router.post('/', (req, res, next) => {
    var limit = parseInt(req.body.limit, 10);
    var offset = parseInt(req.body.offset, 10);

    articleModel
        .find()
        .skip(offset)
        .limit(limit)
        .exec()
        .then(function(article) {
            res.render('backend/page/article/article', {
                article: article
            });
        });
});

module.exports = router;
