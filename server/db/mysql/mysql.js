var mysql = require('mysql')
var config = require('../../config')
var connection = mysql.createConnection(config.mysql)

connection.connect(function(err) {
    if (err) {
        console.error('链接数据库时出错了: ' + err.stack)
        return
    }
    console.log('数据库链接成功了！进程id: ' + connection.threadId + '\n')
})

// 查询
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) {
      throw error
    }

    console.log('测试数据库查询。查询结果: ', results[0].solution)
})
