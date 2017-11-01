var express = require('express');
var router = express.Router();

/* GET /posts. */
router.get('/', function(req, res, next) {
    var author = req.query.author;
    console.log(req.query)
    res.render('posts', {
        title: 'posts'
    });
});

module.exports = router;
