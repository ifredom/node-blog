var express = require('express');
var router = express.Router();

/* GET /home. */
router.get('/', function(req, res, next) {
    var author = req.query.author;
    console.log(req.query)
    res.render('home', {
        title: 'posts'
    });
});

module.exports = router;
