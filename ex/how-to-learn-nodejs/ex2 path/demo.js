const path = require('path')

const basename = path.basename('D:\myworkspace\learnnode\how-to-learn-nodejs\module pathdemo.js')
console.log( basename)
console.log( path.dirname('./test/module path.js'))
console.log( path.extname('./test/module path.js'))

const str = path.format({
    heh:'c:/est0',
    // base:'/base/heh/.id.js',
    name:'tt',
    ext:'.html'
})
console.log(str)
console.log(path.parse(str))
console.log(path.join('1','2'))
console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb'))
console.log(path.resolve('bb','/baz','/bar'))
console.log(path.resolve('bb','./baz','./bar'))