let arr = [1,2,2,3,4]

function isDuplicate(arr){

    for(i=0;i<arr.length-1;i++){
        let el = arr[i]
        for(j=i+1;j<arr.length;j++){
            if(el==arr[j]){
                return true
            }
        }
    

    }
    return false
}
console.log(isDuplicate(arr))