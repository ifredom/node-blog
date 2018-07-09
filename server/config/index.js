module.exports = {
    port: process.env.PORT ? process.env.PORT : 3003, // 端口号
    mongodb: 'mongodb://localhost:27017/ifredomblog', // 数据库地址
    session: {
		name: 'SID',
		secret: 'SID',
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 365 * 24 * 60 * 60 * 1000
        }
    },
    mysql: {
        host: 'localhost',
        user: 'root',
        password: '123456', // 手动设置，需要记住
        port: 3306, // 默认端口即为3306
        database: 'test' // 电脑上安装Navicat for MySQL，然后手动创建数据库test(Schema)
    },
    blog: {
        theme: 'default',
        title: 'ifredom-node-blog',
        description: 'ifredom：ifredom博客,您所感兴趣的尽在这里 ——阅读、收集、分享你所关心的内容从来没有这么容易',
        author: 'ifredom',
        email: '1950735817@qq.com'
    }
};
