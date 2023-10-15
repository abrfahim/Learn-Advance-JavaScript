// work with operand
// 2 + 3
// Here 2 & 3 are operand , + is operator

// Unary operators perform an action with a single operand.
// Binary operators perform actions with two operands.

var a =9;
a++; // Increment operator
// ++a also be written

var b = 5;
b--;

console.log(a);
console.log(b);

var line1  = "hello";
var line2 = "world"

var line3 = line1 + " " + line2 + "!"  // string operator
document.write(line3);

var c = 35 + "name" + 4 + 3;  // concated - number converted to string for adding another string.
document.write("c =" +c);

var d = 27+ 3 + "string" + 1;
document.write("d =" +d);

// [ ==, <=, =>, ===, != <, > ] comparison operator which give a boolean value.

var comp1 = 5 == "5";
console.log(comp1); // converted to integer before compare

var comp2 = 5 === "5";
console.log(comp2);  // check equality

var m = (5>10) ? "Left":"Right"; // condition true = left: false = right
console.log(m);
