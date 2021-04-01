

// array to be searched
let arr =[2,3,4,5,6,7,8];

//Binary Search 
function BinarySearch (arr,n){
    
   //middle value
    let m= Math.floor(arr.length/2)

 //if given num is greater than middle value
    if(n>arr[m]){
        for(i=m;i<arr.length;i++){
            if(arr[i]==n){
                return true
            }
        }
        return false
    }
    //if the num is smaller than middle vallue
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
// search(array , num)
console.log(BinarySearch(arr,1))
