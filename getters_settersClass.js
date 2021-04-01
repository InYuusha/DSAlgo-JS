class User{
    constructor(name){
        this.name=name;
    }
    get name(){
        return this._name
    }
    set name(value){
        if(value.length<=0){
            console.log("Name too short")
        }
        else{
            this._name=value
        }

    }
}
let inyuusha = new User("InYuusha")
console.log(inyuusha)
console.log(inyuusha.name)