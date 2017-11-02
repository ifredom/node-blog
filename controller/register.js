var express = require('express');
var router = express.Router();

/* GET /register. */
router.get('/', function(req, res, next) {
    res.render('register');
});

module.exports = router;
