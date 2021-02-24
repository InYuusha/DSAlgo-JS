let arr1 = [1,2,3,4];
let arr2 =[2,4,5,6];
let arr3 =[]

for(i=0;i<arr1.length;i++){
    arr3.push(arr1[i])
}


for(j=0;j<arr2.length;j++){
    let el =arr2[j];
    for(k=0;k<arr3.length;k++){
        if(el==arr3[k]){
            arr3.splice(k,1)   
        }
    }
    arr3.push(arr2[j])

}
for(t=1;t<arr3.length;t++){
    for(i=0;i<arr3.length;i++){
        if(arr3[i+1]<arr3[i]){
            temp=arr3[i];
            arr3[i]=arr3[i+1];
            arr3[i+1]=temp;
        }
    }
}

console.log(arr3)
