var sha1 = require('sha1');
var express = require('express');
var router = express.Router();

var UserModel = require('../models/users');
var checkNotLogin = require('../middlewares/check').checkNotLogin;
/* GET users listing. */
router.get('/', (req, res, next) =>{
    res.render('login', { title: 'Express-Node-Blog' })
});
router.get('/:min/:max', (req, res, next) => {
    var min = parseInt(req.params.min);
    var max = parseInt(req.params.max);
    console.log(min, max)
    if (isNaN(min) || isNaN(max)) {
        res.status(400);
        res.json({ error: "Bad request." });
        return;
    }

    var result = Math.round((Math.random() * (max - min)) + min);
    res.json({ result: result });
    // res.render('login', { title: 'hehe' })
});
// POST /signin 用户登录
router.post('/', function (req, res, next) {
    
    var name = req.fields.name;
    var password = req.fields.password;
    console.log(name)
    console.log(password)
    res.redirect(`/posts`);
});
module.exports = router;
