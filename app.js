// 使用es6语法
// babel-register模块改写require命令，为它加上一个钩子。此后，每当使用require加载.js、.jsx、.es和.es6后缀名的文件，就会先用Babel进行转码。
// 由于它是实时转码，所以只适合在开发环境使用。
require("babel-core/register")
// 连接Mongdb数据库服务
require('./mongodb/mongodb.js')
// 连接mysql数据库服务
// require('./mysql/mysql.js')

var express = require('express')
var path = require('path')
var favicon = require('serve-favicon')
var logger = require('morgan')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session')

var MongoStore = require('connect-mongo')(session) // 访问服务器时，保存或更新session到数据库mongodb
var winston = require('winston') // 输出日志
var expressWinston = require('express-winston') // 输出日志，依赖于winston包
var merge = require('webpack-merge') // 对象合并工具

var routes = require('./routes')
var config = require('./config')
var app = express()

// 视图引擎设置
// *设置为pug
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
// *设置为html或者ejs，ejs太老过时了,复用模板功能有限
// app.set('view engine', 'html');
// app.engine('.html', require('ejs').__express);

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev')) // 加载日志中间件。
app.use(bodyParser.json()) // 加载解析json的中间件。
app.use(bodyParser.urlencoded({ extended: false })) // 加载解析urlencoded请求体的中间件。
app.use(cookieParser()) // 加载解析cookei的中间件。

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')))
// app.use('/dist', express.static(resolve('./dist'))) // vue单页项目时设置静态文件目录，直接加载buld生成的目录，一般为dist

// session 中间件
app.use(session({
    user: config.session.key, // 设置 cookie 中保存 session id 的字段名称
    secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    resave: true, // 强制更新 session
    saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
    cookie: {
        maxAge: config.session.maxAge // 过期时间，过期后 cookie 中的 session id 自动删除
    },
    store: new MongoStore({ // 将 session 存储到 mongodb
        url: config.mongodb // mongodb 地址
    })
}))

// 设置模板全局常量
app.locals.moment = require('moment')
app.locals.blog = merge({}, config.blog)

// 输出正常请求的日志
if (app.get('env') !== 'development') {
    app.use(expressWinston.logger({
        transports: [
            new(winston.transports.Console)({
                json: true,
                colorize: true
            }),
            new winston.transports.File({
                filename: 'logs/success.log'  // 输出地址
            })
        ]
    }))
}
// 路由
routes(app)

// 错误请求的日志
app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
        }),
        new winston.transports.File({
            filename: 'logs/error.log' // 输出地址
        })
    ]
}))

// 404 page
app.use(function(req, res) {
    const err = new Error('Not Found')
    res.status(404).render('frontpage/404', {
        message: err.message,
        error: err
    })
})

module.exports = app
