import {
    Error
} from 'mongoose';

var express = require('express');
var router = express.Router();
var _ = require('underscore')
var errorHandle = require('./error')
var moviesModel = require('../models/movies/movies')

/**
 * url  GET /movie
 */
router.get('/', function (req, res, next) {
    moviesModel.find({}).exec().then(function (movies) {
        res.render('page/movie/movie', {
            movies: movies
        });
    })
})
/**
 * url  GET /movie/list
 */
router.get('/list', function (req, res, next) {
    moviesModel.find({}).exec().then(function (movies) {
        res.render('page/movie/list', {
            title: '电影列表',
            movies: movies
        })
    })
});
/**
 * url  GET /movie/add
 */
router.get('/add', function (req, res, next) {
    res.render('page/movie/addmovie', {
        movies:{
            title: '机械风暴ifredom',
            doctor: '李安',
            country: '中国',
            year: 2017,
            language: '中文',
            summary: '这一个快乐的电影，据说是...',
            flash: 'http://www.w3school.com.cn/example/html5/mov_bbb.mp4'
        }

    })
    res.end()
});
/**
 * url  GET /movie/update/:id
 */
router.get('/update/:id', function (req, res, next) {
    var id = req.params.id
    if (id){
        moviesModel.findById(id, function (err, movies) {
            if (err) {
                errorHandle(err)
            }
            res.render('page/movie/addmovie', {
                id: id,
                movies: movies
            })
        })
    }

})
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
            title: '电影详情页',
            movies: movies
        })
    })
})
/**
 * url  POST /movie/add
 */
router.post('/add', (req, res, next) => {
    var movieObj = req.body
    var id = req.body['id']
    var _movie
    
    if (id&&id !=='undefined'){
        moviesModel.findById(id, function (err, movies) {
            if (err) {
                errorHandle(err)
            }
            _movie = _.extend(movies, movieObj)
            _movie.save(function(err, movies){
                if (err) {
                    errorHandle(err)
                }
                res.redirect('/movie/' + id)
            })
        })
    }else{
        _movie = new moviesModel({
            title: movieObj.title,
            doctor: movieObj.doctor,
            country: movieObj.country,
            year: movieObj.year,
            language: movieObj.language,
            summary: movieObj.summary,
            flash: movieObj.flash
        })
        _movie.save(function (err) {
            if (err) {
                console.log(err)
            }
            res.status('success').redirect('/movie')
        })
    }

})
module.exports = router
