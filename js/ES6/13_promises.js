// if successful - resolve else - reject
// .then - resolve ; .catch - reject
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

let b = 10;
let promise = new Promise((resolve, reject) =>{

    setTimeout(()=>{
        let h = 500;
    if(h == b){
        resolve('Successfull');
    }else{
        reject('Not Successfull');
    }
    }, 3000)
});

promise.then((message)=>{
    console.log(`I am from .then = ${message}`)
}).catch((message)=>{
    console.log(`I am from .catch = ${message}`);
})

console.log("I am not waiting for promise");