
 //QUEUES

function Queue(arr){
    this.array =[]
    if(arr) this.array = arr;
}

//returns array
Queue.prototype.getBuffer = function(){
    return this.array.slice()

}
//enqueue operation
Queue.prototype.enqueue = function(value){
    return this.array.push(value)

}
//dequeue operation
Queue.prototype.dequeue = function(){
    return this.array.shift()

}

Queue.prototype.isEmpty = function(){
    return this.array.length==0
}

//nth last added el
function nthEl(que,n){
    n-=1;
    let bufferArr = que.getBuffer()
    let bufferQue = new Queue(bufferArr)
    while(n!=0){
        bufferQue.dequeue()
        n--
    }
    return bufferQue.dequeue()

}
//search operation returns T or F
function searchEl(que,el){
    let bufferArr =que.getBuffer()
    let bufferQue = new Queue(bufferArr)

    while(!bufferQue.isEmpty()){

        if(bufferQue.dequeue()==el){
            return true
        }
    }
    return false
    
}


let que = new Queue()
que.enqueue(2)
que.enqueue(3)
que.enqueue(4)
que.enqueue(5)

console.log(que)
console.log(searchEl(que,1))
console.log(que)


 
