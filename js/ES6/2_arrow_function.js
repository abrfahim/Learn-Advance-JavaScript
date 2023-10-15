/*
Arrow function {()=>} is concise way of writing Javascript functions in shorter way.
 Arrow functions were introduced in the ES6 version. They make our code more structured and readable.
  Arrow functions are anonymous functions i.e. functions without a name and are not bound by an identifier.
*/

let arrowfunction = (parameter) =>{
    console.log("Hi, I'm arrow function from "+parameter+" and even smarter one");
}
arrowfunction("ES6");

console.log("------------------------");

let adnum = (p1,p2) =>{
    return (p1+p2);
}
console.log(adnum(2,3));