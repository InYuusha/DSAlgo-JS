function linkedListNode(data){
    this.value = data;
    this.next = null;
}
function linkedList(){
    this.head = null
    this.size = 0

}
linkedList.prototype.insert = function(value){
    if(this.head==null){
        this.head = new linkedListNode(value)
    }
    else{
        temp = this.head;
        this.head = new linkedListNode(value)    
        this.head.next = temp

    }
    this.size++
}

linkedList.prototype.remove = function(value){
    let currentHead = this.head;
    let prev = currentHead

    if(this.head.value ==value){
        this.head =this.head.next
        this.size--
    }
    else {
        
        while(currentHead.next){
            if(currentHead.value==value){
                prev.next = currentHead.next
                prev= currentHead
                currentHead = currentHead.next
                break
            }
            prev= currentHead
            currentHead = currentHead.next        
            
    }
}
if(currentHead.value==value){
    prev.next =null
}
this.size--

}

linkedList.prototype.search = function(value){
    let currentHead = this.head;
    if(currentHead.value==value){
        return true
    }
    else{
        while(currentHead.next){
            if(currentHead.value==value){
                return true
            }
    
            currentHead = currentHead.next
        }
    }
    if(currentHead.value==value){
        return true
    }
  
    return false

}


let lL = new linkedList() //initilizing  a  linked list

lL.insert(2)
lL.insert(4)
lL.insert(3)          //last added  node is head

console.log(lL)



console.log(lL.search(8))