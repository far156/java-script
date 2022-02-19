//static
class person {
    constructor(fname,lname){
        this.firstname=fname;
        this.lastname=lname;
    }
    greeting(){
        console.log(`hello${this.firstname}${this.lastname}!`);
    }
    static test(){
        console.log("i am static!");
    }

}
let person1=new person("simana","kk");
console.log(person1.greeting());
console.log(person.test());