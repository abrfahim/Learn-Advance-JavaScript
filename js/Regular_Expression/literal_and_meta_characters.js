
let re;
let str;
// literal characters
re = /hello world/i;  // i - identifier which is case in-sensetive
str = "Hello World";
console.log(re.exec(str));

function retest(re, str){
    if(re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} doesn't match ${re.source}`);
    }
}

retest(re,str);

// Meta characters
let re1 = /^hello/; // Must start with 0th index
let re2 = /^hello$/ ; // Must start and end with
let re3 = /hello&/ ; // Must end with
let re4 = /^h.llo$/ ; // Matches any single character
let re5 = /h*llo/ ; // 0 or more times
let re6 = /he?llo/ ; // optional
let re7 = /hello?/; // escaping


let str1 = "Hello world!";

function retest1(re1, str1){
    if(re1.test(str1)){
        console.log(`${str1} matches ${re1.source}`);
    }else{
        console.log(`${str1} doesn't match ${re1.source}`);
    }
}
retest1(re1, str1);

