var sha1 = require('sha1');
var express = require('express');
var formidable = require('formidable');
var router = express.Router();

var adminModel = require('../models/admin/admin.js')
/* GET /login. */
router.get('/', (req, res, next) => {
  res.render('login', {
    title: 'Express-Node-ifredom-Blog',
    flash: req.flash('info') 
  })
  res.end();
});

/* POST /login 用户登录*/
router.post('/', function (req, res, next) {
  var form = new formidable.IncomingForm();
  var name = req.body.name;
  var password = req.body.password;

  adminModel.findOne({ name: name, password: password }).exec().then(function(user){
    if (!user) {
      req.flash('error', '用户不存在');
      console.log('用户不存在')
      return res.redirect('back');
    }
    // 检查密码是否匹配
    if (password !== user.password) {
      req.flash('error', '用户名或密码错误');
      console.log('用户名或密码错误')
      return res.redirect('back');
    }

    req.flash('success', '登录成功');
    // 用户信息写入 session
    delete user.password;
    req.session.user = user;
    // 跳转到主页
    res.redirect('/home');
  })

  // 保存
  // var dbData = new adminModel({ name: 'ifredom',password:'111111' })
  // dbData.save(function (err) {
  //   if (err) {
  //     console.log(err)
  //   }
  //   // saved success!
  // })

});
module.exports = router;