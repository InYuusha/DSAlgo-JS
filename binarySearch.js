let arr =[2,3,4,5,6,7,8];

function search (arr,n){
    let m= Math.floor(arr.length/2)
    if(n>arr[m]){
        for(i=m;i<arr.length;i++){
            if(arr[i]==n){
                return true
            }
        }
        return false
    }
    if(n<arr[m]){
        for(i=m;i>=0;i--){
            if(arr[i]==n){
                return true
            }
        }
        return false
    }
    if(n==arr[m]){
        return true
    }
}

console.log(search(arr,1))
