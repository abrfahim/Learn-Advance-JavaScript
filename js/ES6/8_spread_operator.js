/* 
The spread operator (…) with objects is used to create copies of existing objects with new or updated values or to make a copy of an object with more properties.
*/


let str = "AbrarFahim";
let str1 = [...str];        // use [] braces and tripple ...
console.log(str1);


let arr1 = ["Mango","Jackfruit", "lichi"];
let arr2 = ["bmw", "mercedes", "Toyota"];
let arr3 = "persons";

// Now we combined these 3 arr into 1 using spread operator

let arrSum = [...arr1, ...arr2, arr3];          // actually arr3 is a string not array

console.log(arrSum);

// spread on object ES8
let persons = {
    fn : "Abrar",
    ln : "Fahim"
};

let newper = {...persons, dob : "16/05/1995"}; // created a new new object with dob - updated

console.log(newper);


// spread operator with functional parameters

let player = ["Messi", "Ronaldo"];

let test = (player1, player2)=> {
    console.log(`who is better ${player1} or ${player2}`);
}

test(player[0], player[1]);  // normal way
test (...player);   // spread way