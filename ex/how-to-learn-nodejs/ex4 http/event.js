var EventEmitter = require('events').EventEmitter

var life = new EventEmitter()
life.setMaxListeners(11)

function water(who){
    console.log("给 "+who +' 倒水 ...1')
}
life.on('event1',water)

life.on('event1',function(who){
    console.log("给 "+who +' 做饭 ...2')
})
life.on('event1',function(who){
    console.log("给 "+who +' 洗衣服 ...3')
})
life.on('event1',function(who){
    console.log("给 "+who +'  ...4')
})
life.on('event1',function(who){
    console.log("给 "+who +'  ...5')
})
life.on('event1',function(who){
    console.log("给 "+who +'  ...6')
})
life.on('event1',function(who){
    console.log("给 "+who +'  ...7')
})
life.on('event1',function(who){
    console.log("给 "+who +'  ...8')
})
life.on('event1',function(who){
    console.log("给 "+who +'  ...9')
})
life.on('event1',function(who){
    console.log("给 "+who +'  ...10')
})
life.on('eve2',function(who){
    console.log("给 "+who +'  买衣服')
})
life.on('eve2',function(who){
    console.log("给 "+who +'  交工资')
})

life.removeListener('event1',water)
life.removeAllListeners('event1')


var hasManListener = life.emit('event1','汉子')
var hasGirlListener = life.emit('eve2','妹子')
var hasListener = life.emit('e','路人甲')

console.log( hasManListener )
console.log( hasGirlListener )
console.log( hasListener )
console.log( life.listeners('event1').length )
