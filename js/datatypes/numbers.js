/*Different types of data:
Numbers     - Numerial values 
Strings     - Collection of characters
Booleans    - Either true or false
Arrays      - Collection of items or values
Objects     - Collection of property value:pairs
*/

var a = 50e5;  // e - exponential 10**5 , also we can use -e5
console.log(a);  

var s = "Learning";
console.log(s);

var c = a+s;
console.log(c); // concatenated

console.log (a.toString(2)); // converted number to string with base

var pi = 3.1416;
console.log  (pi.toPrecision(2)); // help to select your point but converted to string 

var s1 = "500";
console.log (parseInt(s1)); // converted to number

console.log (isNaN(s1)); // check it is a number or not and return a boolean value