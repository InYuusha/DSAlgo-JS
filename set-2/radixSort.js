function radix (list){
    let d=0; let bin=list;

    function sort(list,d){
        let sorted=[]
    for(n=0;n<10;n++){

        for(i=0;i<list.length;i++){
            if(d==0){
                if(list[i]%10==n){
                    sorted.push(list[i])

                }
            }
            if(d==10){
                if(Math.floor(list[i]/10)==n){
                    sorted.push(list[i])
                }
            }
        }
    }
    return sorted
        
    }
    
        while(d<=10){
            bin = sort(bin,d)
            console.log(bin)
            d+=10;
        }
        
        
    
      
        return bin

}
console.log(radix([91,21,20,30,42,54,67,55]))