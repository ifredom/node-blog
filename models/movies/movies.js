var mongoose = require('mongoose')
var Schema = mongoose.Schema

var moviesShema = new Schema({
    title: String,
    doctor: String,
    country: String,
    year: Number,
    language: String,
    summary: String,
    flash: String,
    meta: {
        createAt: {
            type: Date,
            default: Date.now()
        },
        updateAt: {
            type: Date,
            default: Date.now()
        }
    }
})
moviesShema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now();
    }
    next()
})
// moviesShema.statics = {
//     fetch: function (cb) {
//         return this.find({}).sort('meta.updateAt')
//     },
//     findOne: function (id, cb) {
//         return this.findOne({_id: id})
//     }
// }
var movies = mongoose.model('movies', moviesShema)

module.exports = movies