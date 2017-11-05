var express = require('express');
var router = express.Router();
var sha1 = require('sha1')
var adminModel = require('../models/admin/admin.js')

/* GET /register. */
router.get('/', function(req, res, next) {
    res.render('register')
})

/* POST /register. */
router.post('/', function(req, res) {
    var name = req.body.name
    var password = req.body.password

    // 校验参数
    try {
        if (!name || !password) {
            throw new Error('用户名和密码不能为空');
        }
        if (password.length < 6) {
            throw new Error('密码至少 6 个字符');
        }
    } catch (e) {
        return res.redirect('/register');
    }
    password = sha1(password);
    var admin = new adminModel({ name: name, password: password })
    admin.save(function(err) {
        if (err) {
            console.log(err)
        }
        // saved success!
        res.status('success').redirect('login')
    })
})

module.exports = router;