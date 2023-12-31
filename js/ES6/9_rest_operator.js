/*
while the spread operator expands elements of an iterable, the rest operator compresses them. It collects several elements. In functions when we require to pass arguments but were not sure how many we have to pass, the rest parameter makes it easier.
*/


let fruits = ['apple', 'grape', 'mango', 'jackfruit'];
let [first, second, ...third] = fruits

// console.log(first);
// console.log(second);
// console.log(third);

let person = {
    fname: "Simanta",
    lname: "Paul",
    dob: "8-26-1995"
}

let {fname, ...lname} = person

// console.log(fname);
// console.log(lname);

let moreNum = [78,1,2,5,6];

let test =(name, ...numbers) => { // Rest
    console.log(name);
    console.log(numbers);
}

test("Simanta", 67,3,3);
test("Simanta", ...moreNum); // Spread 