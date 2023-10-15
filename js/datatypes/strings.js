var s = "Mangoman";
var t = 'mangoman';

// String are case sensitive, defined by single or double quotations

var x = "Hello \t World";  // \t = tab
console.log (x); 

var y = "Hello \n world"; // \n = next line
console.log(y);

console.log("concatenation: "+ s+t);

console.log(y.length); // check length
console.log(y[0]); // check index


console.log(y.toUpperCase());

console.log(y.toLowerCase());

console.log(y.toLocaleLowerCase());
console.log(y.toLocaleUpperCase());

var g = "  hello ";
console.log(g.trim()); // don't count space

console.log(y.slice(2,4));
