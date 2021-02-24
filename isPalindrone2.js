function isPalindrone(word){
    for(i=0,j=word.length-1;i<word.length,j>=0;i++,j--){
        if(word[i]!=word[j]){
            return false
        }
    }
    return true
}

let word ="helleh"
console.log(isPalindrone(word))