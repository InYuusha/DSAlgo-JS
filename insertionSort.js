let arr = [2,4,1,3,5,7,6];

for(i=1;i<arr.length;i++){

    value = arr[i];

    for(j=i-1;j>=0 && arr[j]>value;j--){
         
             arr[j+1]=arr[j]    
        
    }
    arr[j+1]=value
}

console.log(arr)