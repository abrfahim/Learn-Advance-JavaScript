// callback function is an inner function 
// call by name , not to use first braces ()


//normal function
function mathplus(a,b){
    console.log(a+b);
}
mathplus(2,5);

// arrow function
let sum = (a,b) =>{console.log(a+b)};
sum(10,10);


// callback function

numbers = [1,2,3,4,5,6,7,8,9];
let printAll = (item)=>{console.log(item)};
let square = (item)=> {return item*item};

numbers.forEach(printAll);
numbers.forEach(square);

let newSquareArray = numbers.map(square);
console.log(newSquareArray);
