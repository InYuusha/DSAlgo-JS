function Stack(arr){
    this.arr=(arr?arr:[])
  
}

Stack.prototype.push=function(el){
    return this.arr.push(el)

}
newStack = new Stack()
console.log(newStack)
newStack.push(2)
console.log(newStack)
