const readline=require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("Enter Your name",(name)=>console.log("Your name is "+name))