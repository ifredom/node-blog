import { Error } from "mongoose"
function errorHandle(err){
    var errorMsg = new Error(err)
    console.log(errorMsg)
}
module.exports = errorHandle
