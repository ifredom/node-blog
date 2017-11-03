var express = require('express');
var router = express.Router();
var adminModel = require('../models/admin/admin.js')

/* GET /register. */
router.get('/', function(req, res, next) {
    res.render('register');
});

/* POST /register. */
router.post('/', function(req, res) {
    var name = req.body.name
    var password = req.body.password

    var admin = new adminModel({ name: name, password: password })
    admin.save(function(err) {
        if (err) {
            console.log(err)
        }
        // saved success!
        res.redirect('login');
    })
})

module.exports = router;