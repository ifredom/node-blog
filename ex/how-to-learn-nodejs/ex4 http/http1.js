function say(something){
    console.log(something)
}

function person(callback, msg){
    msg += " is cool"
    callback(msg)
}
person(say,"nodejs")