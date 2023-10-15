// Error - its create problem to run another blocks of code

console.log("Before error");
try{
    // error-holder
    // function();
}catch(err){
    console.log(err.message);
    console.log(err.type);
}finally{
    // run the code
    console.log("Don't worry, I am running!")
}
console.log("After error");

console.log("-----------------------------------");

let x = 10;

try{
    if (x>30) throw "Big Boy"
    else if(x<18) throw "Small Boy"
    else throw "Super Man"
}catch(err1){
    console.log(err1);
    console.log(err1.message);
    console.log(err1.type);
} finally{
    console.log("No final");
}