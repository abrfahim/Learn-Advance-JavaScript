// collection of items

// use third braces to make an array

var countries = ["Bangladesh", "Pakistan", "India", "Srilanka"];

// use browser console to see values
countries[0]; // index
countries.length;
countries.push("Afganistan");  // added as last element
countries.pop(); // remove last element

countries[countries.length] = "Japan";

console.log(countries);

var k = "WWWxyldkjfkjf";
var m = k.split("");
console.log(m); // make an array itself

var ex = "Abrar, Fahim, Deep, Tammanna, Sundori";
var tx = ex.split(", ");
console.log(tx);

var comma = tx.toString();
console.log(comma); //tostring added a comma before every element except first

var rt =  ["Bangladesh", "Pakistan", "India", "Srilanka"];
var q = rt.join(" country: ") // we can change 
console.log(q);

var concat1 = countries.concat(tx);
console.log(concat1);

concat1.sort();  //ascending
concat1.reverse(); // descending
