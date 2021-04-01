function Queue(arr){
    this.arr = (arr?arr:[])

}
Queue.prototype.push=function(el){
    return this.arr.push(el)

}
Queue.prototype.dequeue = function(){
    return this.arr.shift()
}
Queue.prototype.length=function(){
    return this.arr.length
}

que = new Queue()
console.log(que)
que.push(2)
que.push(3)
que.push(5)
console.log(que)
que.dequeue()
console.log(que)
console.log(que.length)