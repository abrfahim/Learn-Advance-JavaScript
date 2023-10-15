// Premitive types deals with value = number, string, boolean
// Referrence types deals with address = array, object

let a = 5;
let b = a;

a = 10;
console.log(a); // value changed 
console.log(b); // value never changed 

let arr1 = [1,2,3];
let arr2 = arr1;

arr1[1] = 500;

console.log(arr1);
console.log(arr1; // both are changed due to address allocation