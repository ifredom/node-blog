var express = require('express');
var router = express.Router();


var movies = {
        title: ' immoc 首页',
        movies: [{
                title: '机械战警',
                _id: '1',
                poster: 'http://b.hiphotos.baidu.com/image/pic/item/838ba61ea8d3fd1fe81797463a4e251f95ca5fab.jpg'
            },
            {
                title: '神奇四侠',
                _id: '2',
                poster: 'http://b.hiphotos.baidu.com/image/pic/item/838ba61ea8d3fd1fe81797463a4e251f95ca5fab.jpg'
            },
            {
                title: '18的夏天',
                _id: '3',
                poster: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1509906863413&di=30126167b34206c33551893a14d51d23&imgtype=jpg&src=http%3A%2F%2Fimg3.imgtn.bdimg.com%2Fit%2Fu%3D4270520496%2C2943030266%26fm%3D214%26gp%3D0.jpg'
            }
        ]
    }
    /* GET /home. */
router.get('/', function(req, res, next) {
    res.render('home', movies);
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
    }
    /* GET /detaile页面. */
router.get('/:id', function(req, res, next) {
  res.render('detail', detailMovie);
});

module.exports = router;