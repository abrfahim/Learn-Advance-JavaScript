// Inner if

// Find out the largest number

var n1 = prompt("Enter first number: ");
var n2 = prompt("Enter second number: ");
var n3 = prompt("Enter third number: ");

// continue to integer value
n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if (n1>=n2){
    if (n1>=n3){
        console.log(`N1- ${n1} is the largest number`);
    }
    else{
        console.log(`N3- ${n3} is the largest number`);
    }
}
else{
    if(n2>=n3){
        console.log(`N2- ${n2} is the largest number`);
    }
    else{
        console.log(`N3- ${n3} is the largest number`);
    }
}

