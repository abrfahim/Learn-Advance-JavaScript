// https://jsonlint.com - verify json object

/*
JSON SUPPORTS - String, Number, Boolean, Array, Object (JSON), Null
----------------------------------------------------------------------
Doesn't Supports - Date, Function, Undefined
*/

var person = {
    name: "Abrar",
    age : 25,
    dob : 1995-16-1,
    married: false,
    test_null : null,
    test_undefined: undefined,
    greetings : function(){
        console.log(`Hello, Mr. ${this.name} (${this.age}). Welcome to our hotel`);
    }
}

// converting to JSON\
var p1 = JSON.stringify(person);
console.log(p1); // Now check what are changed and accepted