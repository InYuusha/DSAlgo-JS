

//STACK

function Stack(arr){

    this.array = []
    if(arr) this.array =arr
}

//Insertion
Stack.prototype.push=function(value){
    if(value) this.array.push(value)
    
}

//Deletion
Stack.prototype.pop = function(){
    return this.array.pop()
}

//returns array
Stack.prototype.getBuffer = function(){
    return this.array.slice()
}

//returns true or false
Stack.prototype.isEmpty = function(){
    return this.array.length==0
}

//nth last added elements
function nthElement(stack,n){
    bufferStack =  stack.getBuffer() 
    n-=1
    while(n>0){
        bufferStack.pop()
        n--

    }
    return bufferStack.pop()
}


//serach operation returns T or F
function searchElement(stack,el){

    let found = false
    bufferArray = stack.getBuffer() //returns the array
    bufferStack = new Stack(bufferArray)  //create a new stack using that array

    while(!found && !bufferStack.isEmpty()){ //stop if el found or stack is empty

        if(bufferStack.pop()==el){
            found = true
        }
    }
    return found

}

//create a new stack
let stack = new Stack()
//add els
stack.push(5)  //Stack {array:[5]}
stack.push(3)  //Stack {array:[5,3]}
stack.push(2)  //Stack {array:[5,3,2]}
stack.push(1)  //Stack {array:[5,3,2,1]}
console.log(stack)  // logs Stack {array:[5,3,2,1]}
//gives the nth last addded el
console.log(nthElement(stack,1))   //1
console.log(searchElement(stack,8))  //false
