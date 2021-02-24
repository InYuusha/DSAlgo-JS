function HashTable(size){
    this.size =  size;
    this.values = new Array(size)
    this.keys = new Array(size) 
}

HashTable.prototype.put=function(key,value){

    index = this.hash(key)
    while(this.values[index]!=null){
        index=index+1
    }
    this.keys[index]=key
    this.values[index]=value
}

HashTable.prototype.get = function(key){
    index = this.keys.indexOf(key)
    return this.values[index]
}

HashTable.prototype.hash=function(key){
    return key % this.size
}

let table = new HashTable(13)
table.put(7,"hi")
table.put(20,"we")
table.put(33,"car")
table.put(42,"some")
table.put(46,"say")

console.log(table.get(20))