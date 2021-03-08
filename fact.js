//iterative method
function factIter(num){
    let f =1;
    while(num!=1){
        f*=num
        num--

    }
    return f
}

//recursive method
function factRecur(num){
    if(num==1){
        return num;
    }
    else {
        return num*fact(num-1)
    }
}

console.log(factIter(5))
console.log(factRecur(5))

