// object method - using a function inner an object

var public = {
    firstname : "Abrar",
    lastname : "Fahim",
    dob : 1995,

    fullname : function(){
        return (`Mr. ${this.firstname} ${this.lastname}`);
    }
}

console.log(public.fullname());
console.log(public.dob);
console.log(public);