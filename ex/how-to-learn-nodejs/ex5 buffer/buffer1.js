var fs = require('fs')
var path = require('path')
var fileName = 'test.jpg'


fs.readFile('test.jpg',function(err,origin_buffer){

    let newFileName = path.parse(fileName).name + '_buffer' + path.parse(fileName).ext

    fs.writeFile(newFileName,origin_buffer,function(err){
        if(err)console.log(err)
    })

    var base64Img = origin_buffer.toString('base64')

    var decodedImg = Buffer.from(base64Img,'base64')


    console.log ( origin_buffer.equals(decodedImg) )


    fs.writeFile('another_buffer.jpg',decodedImg,function(err){
        if(err)console.log(err)
    })


})