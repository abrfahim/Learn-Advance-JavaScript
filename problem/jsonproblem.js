
// error - Uncaught Syntaxerror

//JSON object
var student_json = {
    "name": "Fahim",
    "class": "django",
    "id": 36
}
// converting to JS object
var obj2=JSON.parse(student_json);
console.log(obj2);
