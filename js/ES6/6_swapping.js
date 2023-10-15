
let x = 10;
let y = 20;

// Normal swapping methode
let temp = x;
x = y;
y = temp;

console.log(`x = ${x} and y = ${y}`);

// es6 swapping

let a,b;        // cannot initialize value before swapping

a = 50;
b = 100;

[a,b] = [b,a];

console.log(`a = ${a} and b = ${b}`);
