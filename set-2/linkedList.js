function node(value){
    this.value=value;
    this.next =null

}

function lList(){
    this.head = null;
    this.size=0;
}

lList.prototype.insert=function(value){
    if(this.head==null){
        this.head =new node(value)
    }
    else{
        temp = this.head;
        this.head=new node(value)
        this.head.next = temp
    }
    ++this.size

}
lList.prototype.search=function(value){

    let currentHead =this.head;

    if(currentHead.value==value){
        return true
    }
    while(currentHead.next){

        if(currentHead.value==value){
            return true
        }
        currentHead =currentHead.next
    }
    if(currentHead.value==value){
        return true
    }
    return false
    
    
}
lList.prototype.remove=function(value){
    currentHead = this.head;
    prevHead = currentHead
    if(currentHead.value==value){
        this.head = this.head.next
        
    }
    while(currentHead.next){
        if(currentHead.value==value){
            prevHead.next = currentHead.next
            prevHead = currentHead;
            currentHead = currentHead.next
            

        }
        prevHead = currentHead;
        currentHead =currentHead.next
    }
    if(currentHead.value==value){
        currentHead.next = null
        
    }
    
    this.size--

}

list = new lList()
list.insert(2)
list.insert(6)
list.insert(8)
list.insert(3)
list.insert(4)
console.log(list)
list.remove(4)
console.log(list)