import {
    Error
} from 'mongoose';

var express = require('express');
var router = express.Router();

var errorHandle = require('./error')
var moviesModel = require('../models/movies/movies')

/**
 * url  GET /movie
 */
router.get('/', function (req, res, next) {
    moviesModel.find({}).exec().then(function (movies) {
        res.render('page/movie/movie', {
            title: 'ifredom movies',
            movies: movies
        });
    })
})
/**
 * url  GET /movie/list
 */
router.get('/list', function (req, res, next) {
    moviesModel.find({}).exec().then(function (movies) {
        console.log(movies)
        res.render('page/movie/list', {
            title: 'ifredom movies',
            movies: movies
        })
    })
});
/**
 * url  GET /movie/add
 */
router.get('/add', function (req, res, next) {
    res.render('page/movie/addmovie', {
        title: '机械风暴ifredom',
        doctor: '李安',
        country: '中国',
        year: 2017,
        language: '中文',
        summary: '这一个快乐的电影，据说是...',
        flash: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4'
    })
    res.end()
});
/**
 * url  GET /movie/detaile
 */
router.get('/:id', function (req, res, next) {
    var id = req.params.id

    moviesModel.findById(id, function (err, movies) {
        if (err) {
            errorHandle(err)
        }
        res.render('page/movie/moviedetail', {
            title: 'ifredom movies',
            movies: movies
        })
    })
})
/**
 * url  POST /movie/add
 */
router.post('/add', (req, res, next) => {
    var query = req.body
    var movie = new moviesModel(query)
    movie.save(function (err) {
        if (err) {
            console.log(err)
        }
        res.status('success').redirect('/movie')
    })
})


module.exports = router