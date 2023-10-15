// Local scope - Inner a function, not accessable outer function.
// Global scope - open and accessable.

//global
var a = 21; // can be updated
let b = 25; // can't declare b again.
const c = 30; // can not modify

// Global and Local Scope with let and const (ES6)


 
 console.log(`Global Scope: `, a, b, c);
 
 function test() {
    //local
     var a = 4;
     let b = 5;
     const c = 6;
     console.log(`Functions Scope: `, a, b ,c);
 }
 
 test();
 
 console.log(`Global Scope: `, a, b, c);
 
 if (true) {
     var a = 7; // changeable cause of using var
     let b = 8;
     const c = 9;
     console.log(`If Scope: ` , a, b, c);
 }
 
 console.log(`Global Scope: `, a, b, c);
 
 
 for (let a = 0; a <10; a ++) {
     console.log(`Loop: `, a);
 }
 
 
 console.log(`Global Scope: `, a, b, c);

 // let is better for variable decleration, no overlapping