// if(condition) {printed message} - printed when true
// else if (condition) {printed message} - printed when true
// else - printed when true

if(false){
    console.log("Printed if");
}
else if (true) {
    console.log("Printed else if");
}
else {
    console.log("Printed else");
}
//``````````````````````````````````````````````````````````
var number = prompt();

if (number<=10){
    console.log("Small Number");
}
else if(number>=11 && number<=50) {
    console.log("Not so big Number");
} else {
    console.log("Big Number");
}
// ------------------------------------------------------------
// Find the largest number
if(n1>n2 && n1>n3){
    console.log(`N1- ${n1} is the largest number`);
}
if (n2> n1 && n2> n3) {
    console.log(`N2- ${n2} is the largest number`);
} else {
    console.log(`N3- ${n3} is the largest number`);
}