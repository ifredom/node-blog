var express = require('express')
var router = express.Router()

/* GET home page. */
router.get('/', (req, res, next)=> {
  res.render('index', { title: 'Express-title-5' })
});

module.exports = router
