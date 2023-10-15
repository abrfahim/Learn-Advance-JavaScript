/* 
What is JSON?
JSON - JavaScript Object Notation
JSON is a lightweight data-interchange format
JSON is plain text written in JavaScript object notation
JSON is used to send data between computers
JSON is language independent *
*/

// More like js object but we need to keep properties under ""

//js object
var student = {
    name : "Abrar",
    class: "python",
    id: 36
};

//JSON object
var student_json = {
    "name": "Fahim",
    "class": "django",
    "id": 36
};

//converting to JSON object
var j1 = JSON.stringify(student);
console.log(j1);

// converting to JS object

var obj2 = JSON.parse(student_json);

console.log(obj2);

// JSON.stringify() --> JS object to JSON String
// JSON.parse() -->  JSON String to JS Object
