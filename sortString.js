let arr =['we','got','you','heelo','hi','m'];

function smallest(arr,start){
    let sm = arr[start]
    for(j=start;j<arr.length;j++){
        if(arr[j].length<sm.length){
            sm=arr[j]
        }

    }
    return arr.indexOf(sm)

}
function swap(arr,index1,index2){
    temp = arr[index1];
    arr[index1]=arr[index2];
    arr[index2] = temp;
}

for(i=0;i<arr.length;i++){
    let el=arr[i]
    index2=smallest(arr,i)
    swap(arr,i,index2)
}
console.log(arr)