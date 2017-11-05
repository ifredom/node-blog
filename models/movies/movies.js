'user strict';

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var moviesShema = new Schema({
    tile: String,
    doctor: String,
    country: String,
    year: String
})

moviesShema.index({ id: 1 })
var movies = mongoose.model('movies', moviesShema)

module.exports = movies