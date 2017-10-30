var c = 0

function printIt(){
    console.log(c)
}
function plus(){
    setTimeout(function(){
        c+=1
    },1000)
}
plus()
printIt()


// 通过回调控制异步流程
// 异步与顺序无关

var d = 0

function printIt2(){
    console.log(d)
}
function plus2(callback){
    setTimeout(function(){
        d+=1;
        callback()
    },2000)
}
plus2(printIt2)
