var sha1 = require('sha1');
var express = require('express');
var router = express.Router();

/* GET /login. */
router.get('/', (req, res, next) =>{
    res.render('login', { title: 'Express-Node-ifredom-Blog' })
    res.end();
});

/* GET /login/10/100 */
router.get('/:min/:max', (req, res, next) => {
    var min = parseInt(req.params.min);
    var max = parseInt(req.params.max);
    if (isNaN(min) || isNaN(max)) {
        res.status(400);
        res.json({ error: "Bad request." });
        return;
    }
    var result = Math.round((Math.random() * (max - min)) + min);
    res.json({ result: result });
});

/* POST /login 用户登录*/
router.post('/', function (req, res, next) {
    
    var name = req.body.name;   // post请求，body接收参数
    var password = req.body.password;
    console.log('跑一边')
    console.log(name)
    req.flash('success', '登陆成功');
    res.send({ success: "登陆成功" });
    // res.redirect(`/posts`);
    
});
module.exports = router;
