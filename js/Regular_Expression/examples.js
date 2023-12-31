// Important topics

// Examples
let re;
let str;

// Postal Code
// 4700, 4000
re = /^[0-9]{4}$/;
str = "4000";

// Phone Number
// 01717888888 +8801717888888 8801717888888
re = /^(+)?(88)?01[0-9]{9}$/;
str = "+8801717888888";

// Email Address
// bohubrihi8.learn@edu.com.bd
re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
str = "bohubrihi.learn@edu.com.bd" ;

console.log(re.test(str));