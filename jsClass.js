//classs
class Person{
    constructor(name,age,height){
        this.name=name;
        this.age=age;
        this.height=height;
    }
    introduce(){
        console.log(`Hello iam ${this.name}`)
    }
}

//constructor function
function personInfo(name,job,country){
    this.name= name;
    this.job=job;
    this.country=country;

}

let zeldris = new Person("Zeldris",21,178);
let abtZeldris = new personInfo("Zeldris","Developer","India")

zeldris.introduce()
console.log(zeldris)
console.log(abtZeldris)
console.log(typeof Person)