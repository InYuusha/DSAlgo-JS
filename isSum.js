function isSum(arr,sum){
    for(i=0;i<arr.length-1;i++){
        let el =arr[i]
        for(j=i+1;j<arr.length;j++){
            if(arr[j]+el==sum){
                return true
            }
        }
 
    }
    return false
}

console.log(isSum([2,3,4,1,5,6],12))
