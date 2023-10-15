/*
Function helps to reuse code or function is a block of code designed to perform a particular task.
Two types - Built in, User Defined
Function can't operate itself, we have to call it.
*/
// we can pass argument in function.
function call(){
    console.log("Hi");
}
call();

console.log("-----------------------------");

function hi(parameter){
    console.log(`Hello, ${parameter}`);
}
hi("Learner");

console.log("-----------------------------");

function namedetails(p1, p2){
    console.log(`Hi, ${p1} ${p2}`);
}
let ad = "Mr.";
namedetails(ad, "Abrar");
console.log("-----------------------------");

function adnum(a,b){
    console.log(a+b);
}
adnum(3,7.8);