let arr =[1,2,0,3,3,2];

for(i=1;i<arr.length;i++){
    let el=arr[i];
    let first =arr[0]
    let anotherExist=false;
    let isFirstUnique=true;

    if(arr[i]==first){
        isFirstUnique=false;
    }
    if(i==arr.length-1&&isFirstUnique==true){
        console.log(first)
    }
   
    for(j=i+1;j<arr.length;j++){
        if(arr[j]==el){
            anotherExist=true
        }      
    }
    for(k=i-1;k>=0;k--){
        if(arr[k]==el){
            anotherExist=true
        }
        if(k==0&&anotherExist==false){
            console.log(el)
        }
    }
}