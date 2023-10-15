let car = ["BMW", "Mercedes", "Toyota"];

let [car1, car2, car3] = car;       // use [] braces for array destructing

let [c1, , c3] = car;  // skiping c2

console.log(car1,car2, car3);
console.log(c1, c3);
