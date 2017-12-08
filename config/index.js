module.exports = {
    port: process.env.PORT ? process.env.PORT: 3003, // 端口号
    mongodb: 'mongodb://localhost:27017/ifredomblog',  // 数据库地址
    session: {
        key: 'ifredomblog',
        secret: 'ifredomblog',
        maxAge: '2592000000'
    },
    blog:{
        theme: 'default',
        title: 'ifredom-node-blog',
        description: 'ifredom：ifredom博客,您所感兴趣的尽在这里 ——阅读、收集、分享你所关心的内容从来没有这么容易',
        author: 'ifredom',
        email: '1950735817@qq.com'
    }
}