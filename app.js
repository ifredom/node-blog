require("babel-core/register") //使用es6语法
    // 安装服务
    // mongod--install--serviceName MongoDB--serviceDisplayName MongoDB--logpath C: \mongodb\ data\ log\ mongod.Log--dbpath C: \mongodb\ data\ db--directoryperdb
    // 启动mongodb服务 mongod --dbpath C:\mongodb\data\db
require('./mongodb/mongodb.js');

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var winston = require('winston');
var expressWinston = require('express-winston');

var routes = require('./routes');
var pkg = require('./package');
var config = require('./config');
var app = express();

// 视图引擎设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// app.set('view engine', 'html');
// app.engine('.html', require('ejs').__express);

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev')); // 加载日志中间件。
app.use(bodyParser.json()); // 加载解析json的中间件。
app.use(bodyParser.urlencoded({ extended: false })); // 加载解析urlencoded请求体的中间件。
app.use(cookieParser());
// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/dist', express.static(resolve('./dist'))) // vue单页设置

// session 中间件
app.use(session({
    name: config.session.key, // 设置 cookie 中保存 session id 的字段名称
    secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
    resave: true, // 强制更新 session
    saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
    cookie: {
        maxAge: config.session.maxAge // 过期时间，过期后 cookie 中的 session id 自动删除
    },
    store: new MongoStore({ // 将 session 存储到 mongodb
        url: config.mongodb // mongodb 地址
    })
}));


// 处理表单及文件上传的中间件
// app.use(require('express-formidable')({
//     uploadDir: path.join(__dirname, 'public/image'), // 上传文件目录
//     keepExtensions: true // 保留后缀
// }));

// 设置模板全局常量
app.locals.blog = {
    title: pkg.name,
    description: pkg.description
};


// 正常请求的日志
if (app.get('env') !== 'development') {
    app.use(expressWinston.logger({
        transports: [
            new(winston.transports.Console)({
                json: true,
                colorize: true
            }),
            new winston.transports.File({
                filename: 'logs/success.log'
            })
        ]
    }));
}
// 路由
routes(app);

// 错误请求的日志
app.use(expressWinston.errorLogger({
    transports: [
        new winston.transports.Console({
            json: true,
            colorize: true
        }),
        new winston.transports.File({
            filename: 'logs/error.log'
        })
    ]
}));

// 404 page
app.use(function(req, res) {
    const err = new Error('Not Found');
    res.status(404).render('404', {
        message: err.message,
        error: err
    });
});

// error page
// app.use(function(err, req, res, next) {
//     // render the error page
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//     res.status(err.status || 500);
//     res.render('error', {
//         error: err
//     });
// });

module.exports = app;