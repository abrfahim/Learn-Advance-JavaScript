// sub class
// Inheritance
/*
The subclass inherits all the methods and properties of the superclass,
 and can also have its own methods and properties
 */

 class Person{      // super class
    constructor(n1, n2, age){
        this.firstname = n1;
        this.lastname = n2;
        this.age = age; 
    }
    greetings(){
        return (`Hi Mr. ${this.firstname} ${this.lastname} (${this.age}). Welcome to our hotel.`)
    }
}
 

class Man extends Person{      //sub class
    constructor(n1, n2, age, phn, lcn){
        super(n1, n2, age)     // defined by super which we need
        this.number = phn;
        this.location = lcn;
    }
    info(){
        return (`Name: Mr. ${this.firstname} ${this.lastname}
        Age: ${this.age}
        Contact: ${this.number}
        Location: ${this.location}`);
    }
}

let Man1 = new Man("Abrar", "Fahim", 25, 881, "Bangladesh");
console.log(Man1.info());
console.log(Man1.greetings());
