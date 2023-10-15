// Break - help to come out from a codeblock and break the loop
// Continue - skip an iteration and jump to continue the loop
/* 
{
     codeblock
}
*/

for(var i=1; i<=5; i++){
    if(i==4){
        break;
    }
    console.log("After break i continued to: "+i);
}

console.log("--------------------------------------")

for(var i=1; i<=5; i++){
    console.log("Before break i continued to: "+i);
    if(i==4){
        break;
    }
}

console.log("--------------------------------------")

for(var i=1; i<=5; i++){
    console.log("Before continue i is: "+i);
    if(i==4){
        continue;
    }
}
console.log("--------------------------------------")

for(var i=1; i<=5; i++){
    if(i==4){
        continue;
    }
    console.log("After continue i is: "+i);
}