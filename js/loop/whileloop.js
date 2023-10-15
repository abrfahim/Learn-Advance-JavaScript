// constant value or true - infinity loop (System may be crashed)

/* while(true){
    console.log("Hello"); // infinity loop
}
*/

// so we need to give a proper condition to evaluate the loop successfully.

var i = 0; // initialization

while(i<=10){  //condition
    console.log("i = "+ i);
    i++; // update
}

