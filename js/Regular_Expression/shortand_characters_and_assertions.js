
str = "+880177389";

// shortand characters

re = /\w/ ;  // word characters - alpha numeric or _ others
re = /\w+/ ; // one or more
re = /\d/; // small d- check digit
re = /\d+/; // one or more digit
re = /\D/; // capital D - Non digit
re = /\s/; //small s- white space
re = /\S/; // capital S - non white space
re = /Hellob/; // Word Boundary
re = /bHellob/;

// Assertions
re = /x(?=yz)/; // Matches x only if x is before y
re = /x(?!yz)/;


function matchtesting(re, str){
    if (re.test(str)){
        console.log(`${str} matches ${re.source}`);
    }else{
        console.log(`${str} doesn't match ${re.source}`);
    }
}

matchtesting(re,str);