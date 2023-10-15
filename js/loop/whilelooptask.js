// find total sum of 1 to 100
// find total product of 1 to 100

var i = 1;
var sum = 0;
var product = 1; // can not be 0 ; 0*n = 0 ; so initial value should 1

while(i<=100){
    sum = sum + i;
    product = product * i;
    i++;
}
console.log(`Total Sum of 1 to 100 is ${sum}`);
console.log(`Total multiplication of 1 to 100 is ${product}`);