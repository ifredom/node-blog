module.exports = function(app) {
    app.get('/', function(req, res) {
        res.redirect('/blog');
    });

    app.use('/blog', require('./controller/blog')); // 博客首页

};
