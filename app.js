require('./mongodb/mongodb.js'); // 连接Mongdb数据库服务.若本地未安装mongDB以及未开启mongDB服务，注释掉此行即可。
// require('./mysql/mysql.js'); // 连接mysql数据库服务.只能选择一个

var path = require('path');
var express = require('express');
var favicon = require('serve-favicon'); // 设置小图标
var logger = require('morgan'); // log调试显示工具
var cookieParser = require('cookie-parser'); // 解析 cookie
var bodyParser = require('body-parser'); // 解析http请求体
var session = require('express-session');  // 记录session中间件
var connectMongo = require('connect-mongo'); // 访问服务器时，更新session到数据库
var winston = require('winston'); // 记录日志
var expressWinston = require('express-winston'); // 输出日志，依赖于winston包
var merge = require('webpack-merge'); // 对象合并工具
var history = require('connect-history-api-fallback'); // Html5 history库

var config = require('./config'); // 导入配置对象
var routes = require('./routes'); // 导入router层控制函数

var app = express();

app.all('*', (req, res, next) => {
    // 设置跨域
    res.header('Access-Control-Allow-Origin', req.headers.origin || '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Credentials', true); //可以带cookies
    res.header('X-Powered-By', '3.2.1');
    if (req.method == 'OPTIONS') {
        res.send(200);
    } else {
        next();
    }
});

var MongoStore = connectMongo(session);

app.use(cookieParser()); // 加载解析cookei的中间件。
// session 中间件
app.use(
    session({
        user: config.session.key, // 设置 cookie 中保存 session id 的字段名称
        secret: config.session.secret, // 通过设置 secret 来计算 hash 值并放在 cookie 中，使产生的 signedCookie 防篡改
        resave: true, // 强制更新 session
        saveUninitialized: false, // 设置为 false，强制创建一个 session，即使用户未登录
        cookie: {
            maxAge: config.session.maxAge // 过期时间，过期后 cookie 中的 session id 自动删除
        },
        store: new MongoStore({
            // 将 session 存储到 mongodb
            url: config.mongodb // mongodb 地址
        })
    })
);

// 路由
routes(app);

app.set('port', config.port); // 设置端口
app.set('views', path.join(__dirname, 'views')); // 设置
app.set('view engine', 'pug'); // 视图引擎设置为pug
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico'))); //  设置小图标
app.use(logger('dev')); // 加载日志中间件。
app.use(bodyParser.json()); // 加载解析json的中间件。
app.use(bodyParser.urlencoded({ extended: false })); // 加载解析urlencoded请求体的中间件。
app.use(express.static(path.join(__dirname, 'public'))); // 设置静态文件目录

// 设置模板全局常量
app.locals.moment = require('moment');
app.locals.blog = merge({}, config.blog);

// 记录正常请求的日志
// env参数，是由nodemon.json中进行设置的
if (app.get('env') !== 'development') {
    app.use(
        expressWinston.logger({
            transports: [
                new winston.transports.Console({
                    json: true,
                    colorize: true
                }),
                new winston.transports.File({
                    filename: 'logs/success.log' // 输出地址
                })
            ]
        })
    );
}
// 记录错误请求的日志
app.use(
    expressWinston.errorLogger({
        transports: [
            new winston.transports.Console({
                json: true,
                colorize: true
            }),
            new winston.transports.File({
                filename: 'logs/error.log' // 输出地址
            })
        ]
    })
);

// 404 page
app.use(function(req, res) {
    const err = new Error('Not Found');
    res.status(404).render('frontpage/404', {
        message: err.message,
        error: err
    });
});

app.use(history());

module.exports = app;
