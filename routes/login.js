var sha1 = require('sha1');
var express = require('express');
var router = express.Router();

var UserModel = require('../models/users');
var checkNotLogin = require('../middlewares/check').checkNotLogin;
/* GET users listing. */
router.get('/', (req, res, next) =>{
    res.render('login', { title: 'Express-Node-Blog' })
});
// POST /signin 用户登录
router.post('/', function (req, res, next) {
    console.log(req)
    var name = req.fields.name;
    var password = req.fields.password;
    console.log(name)
    console.log(password)
    res.render('login', { title: 'post' });
});
module.exports = router;
