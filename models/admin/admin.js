'user strict';

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var adminShema = new Schema({
  name: String,
  password: String,
  id: Number,
  create_time: String,
  admin: {type: String,default:'管理员'},
  level: Number, // 1:普通管理、 2:超级管理员
  avatar:{type: String,default: 'default.jpg'},
})

adminShema.index({ id: 1 })
var admin = mongoose.model('admin', adminShema)

module.exports = admin
