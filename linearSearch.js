function search(arr,n){

    for(i=0;i<arr.length;i++){
        if(arr[i]==n){
            return true
        }
    }
    return false
}

let arr=[2,3,5,7];

console.log(search(arr,9))