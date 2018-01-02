var express = require('express')
var router = express.Router()

/* GET /project. */
router.get('/', (req, res, next) => {
    res.render('frontpage/page/project/index', {
        title: '动效日常'
    })
    res.end()
})
/* GET /project/detail. */
router.get('/:id', (req, res, next) => {

    var id = req.params.id

    if (id) {
        res.render('frontpage/page/project/detail', {
            title: '动画特效',
            id: id
        })
        res.end()
    }
})

module.exports = router
