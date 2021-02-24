function smallest(arr,start){
    
    let sm = arr[start];
    for(i=start+1;i<arr.length;i++){
        if(arr[i]<sm){
            sm=arr[i]
        }
    }
    return arr.indexOf(sm)
}

function swap(arr,index1,index2){
    temp = arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
}


function sort (arr){
    for(j=0;j<arr.length;j++){
        let index1 = j;
        let index2 = smallest(arr,j)
        swap(arr,index1,index2)

    }
}

let arr = [2,3,1,5,4]
sort(arr);
console.log(arr)
