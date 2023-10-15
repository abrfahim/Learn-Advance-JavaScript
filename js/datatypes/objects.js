
// objects defined with curly braces with key & value

student = {name:"Rahim", age:25, hometown:"Dhaka"}; // property:value , object = student

student.age; // get value
student["Rahim"]; // get value

// how to add new property

student["Roll"] = 36;
student.village = "Chittagong";


console.log(student);

// how to delete property

delete student.name; // return a boolean
