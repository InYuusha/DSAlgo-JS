function isPalindrone(word,start,end){
    if(start>=end){
        return true 
    }
    
        if(word[start]!=word[end]){
            return false
        }
        else {
            return isPalindrone(word ,start+1,end-1)
        }
   

} 
let word ="helleh";
let end = word.length-1
console.log(isPalindrone(word, 0, end))
