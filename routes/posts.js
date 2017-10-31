var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    var author = req.query.author;
    console.log(req.query)
    res.render('login', {
        title: 'posts'
    });
});

module.exports = router;
