'user strict';

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema = new Schema({
    title: String, // 标题
    text: String, // 文本内容
    readnum: Number, // 阅读量
    comments: Array, // 评论
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
