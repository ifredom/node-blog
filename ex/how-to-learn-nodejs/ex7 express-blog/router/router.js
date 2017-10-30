//  这样抽象出来路由 是不是就很像vue-cli构建出来的router结构了
var router =[
    {
        path:'/',
        haha:'随便添个属性'
    },
    {
        path:'/user',
        haha:'随便添个属性'
    },
    {
        path:'/bobo',
        haha:'随便添个属性'
    }

]

function doSomething(pathname){
    if(pathname=='/'){
        response.end(objToStr);
    }else if(pathname=='/user'){
        response.end('哈哈哈');
    }else if(pathname=='/bobo'){
        response.end('bobo hui le me');
    }
}

module.exports = doSomething