module.exports = {
    port: 3003,
    session: {
        key: 'myblog',
        secret: 'myblog',
        maxAge: '2592000000',

    },
    mongodb: 'mongodb://localhost:27017/myblog'
}