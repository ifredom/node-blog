var express = require('express');
var router = express.Router();

var moviesModel = require('../models/movies/movies.js')

/* GET /home. */
router.get('/', function(req, res, next) {
    moviesModel.find({}).exec().then(function(movies) {
        res.render('home', {
            title: 'ifredom movies',
            movies: movies
        });
    })
});
// flash: 'http://v.youku.com/v_show/id_XMzEzMzIwMDAyMA==.html?spm=a2h0j.8191423.playlist_content.5~5~5~A&f=51298871&from=y1.2-3.4.1',
var detailMovie = {
    title: ' imooc 详情页',
    movie: {
        doctor: '何塞*帕迪里亚',
        country: '美国',
        title: '机械战警',
        year: 2014,
        poster: 'http://b.hiphotos.baidu.com/image/pic/item/838ba61ea8d3fd1fe81797463a4e251f95ca5fab.jpg',
        language: '英语',
        summary: '翻牌子1978哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈扽店内ihi和',
        flash: 'http://pic.ibaotu.com/00/25/86/008888piCNE6.mp4'
    }
};
/* GET /detaile页面. */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    moviesModel.findById(id, function(err, movie) {
        res.render('detail', movie);
    })
});

module.exports = router;