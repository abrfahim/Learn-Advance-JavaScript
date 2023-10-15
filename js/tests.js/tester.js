

a = [1,3,{a:1, b:3, c:[1,3,4,{x:5, y:10}]}]

//How can find out value of x

console.log(a[2].c[3].x); 
console.log(a[2]["c"][3]["x"]);
console.log(a[2]["c"][3].x);

