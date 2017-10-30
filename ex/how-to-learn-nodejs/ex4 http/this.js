function cat (name){
    this.name = name;
    this.speak=function(){
        console.log(this.name)
        console.log(this)

    }
}
var newCat = new cat('tom')

console.log(newCat.speak())