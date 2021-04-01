/*function isPalindrone(str){

    let flag=false
    helper(0,str.length-1)
    function helper(i,j){
        
        if(str[i]!=str[j]){
            return 
        }
        if(i==j){
            flag=true
            return 
        }
        helper(++i,--j)
        
    }
     return flag
 
  
}
console.log(isPalindrone("racecar"))
*/

function Stack(arr){
    this.arr =(arr?arr:[])

}
Stack.prototype.push=function(el){
    return this.arr.push(el)
}
Stack.prototype.pop=function(el){
    return this.arr.pop(el)
}
Stack.prototype.length=function(el){
    return this.arr.length
}


function isPalindrone(str){
    s= new Stack()
    
    for(i=0;i<str.length-1;i++){
        s.push(str[i])
    }
       let rev =""
    while(s.length!=0){
       rev += s.pop()
    }
    if(st==rev){
        return true
    }
    else return false
}
console.log(isPalindrone("wew"))




