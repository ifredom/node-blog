var sha1 = require('sha1');
var express = require('express');
var formidable = require('formidable');
var router = express.Router();

var movieModel = require('../models/movies/movies');
/* GET /index. */
router.get('/', (req, res, next) => {
    res.render('frontend/addmovie', {
        title: '机械风暴ifredom',
        doctor: '李安',
        country: '中国',
        year: 2017,
        language: '中文',
        summary: '这一个快乐的电影，据说是...',
        flash: 'http://pic.ibaotu.com/00/25/86/008888piCNE6.mp4'
    })
    res.end();
});
router.post('/', (req, res, next) => {
    var query = req.body;
    var movie = new movieModel(query)
    movie.save(function(err) {
        if (err) {
            console.log(err)
        }
        res.status('success').redirect('movie')
    })
});

module.exports = router
