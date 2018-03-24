var sha1 = require('sha1');
var express = require('express');
var formidable = require('formidable');
var router = express.Router();

var adminModel = require('../models/admin/admin.js');

/* GET /login. */
router.get('/', (req, res, next) => {
    res.render('frontend/login');
});

/* POST /login 用户登录*/
router.post('/', function(req, res, next) {
    var name = req.body.name;
    var password = req.body.password;
    password = sha1(password);

    adminModel
        .findOne({
            name: name,
            password: password
        })
        .exec()
        .then(function(user) {
            if (!user) {
                console.log('用户名或密码错误');
                return res.redirect('back');
            }

            // 用户信息写入 session
            delete user.password;
            req.session.uid = user;

            // 跳转到主页
            res.redirect('/blog');
        })
        .catch(error => {
            // console.log(error)
            res.send({
                status: 0,
                type: 'FORM_DATA_ERROR',
                message: '表单信息错误'
            });
            return;
        });
});
module.exports = router;
