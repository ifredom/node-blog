var express = require('express');
var moment = require('moment');
var router = express.Router();
var errorHandle = require('./error');
var articleModel = require('../models/article/article');
/* GET /admin. */
router.get('/', (req, res, next) => {
    articleModel
        .find()
        .limit(6)
        .exec()
        .then(function(article) {
            res.render('backend/page/home/home', {
                article: article
            });
        });
});

module.exports = router;
