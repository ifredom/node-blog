var sha1 = require('sha1');
var express = require('express');
var formidable = require('formidable');
var router = express.Router();

var adminModel = require('../models/admin/admin.js')
    /* GET /login. */
router.get('/', (req, res, next) => {
    res.render('login', {
        title: 'ifredom-Blog 登陆'
    })
    res.end();
});

/* POST /login 用户登录*/
router.post('/', function(req, res, next) {
    var form = new formidable.IncomingForm();
    var name = req.body.name;
    var password = req.body.password;
    password = sha1(password);
    adminModel.findOne({
        name: name,
        password: password
    }).exec().then(function(user) {
        if (!user) {
            console.log('用户不存在')
            return res.redirect('back');
        }
        // 检查密码是否匹配
        if (password !== user.password) {
            console.log('用户名或密码错误')
            return res.redirect('back');
        }

        // 用户信息写入 session
        delete user.password;
        req.session.user = user;
        // 跳转到主页
        res.redirect('/blog');
    })
});
module.exports = router;