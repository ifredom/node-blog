'user strict';

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema = new Schema({
    title: String, // 标题
    textContent: String, // 文本内容
    comments: Array,
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

articleSchema.pre('save', function (next) {
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now()
    } else {
        this.meta.updateAt = Date.now()
    }
    next()
})

var article = mongoose.model('article', articleSchema)
module.exports = article
