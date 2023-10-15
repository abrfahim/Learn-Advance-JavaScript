/* 
"I will call back later!"
A callback is a function passed as an argument to another function
This technique allows a function to call another function
A callback function can run after another function has finished 
*/

let persons = [
    {firstname: "Abrar", lastname: "Fahim"},
    {firstname: "Sonet", lastname: "Chowdhury"},
    {firstname: "Xerin", lastname: "Khondokar"}
];

/*
setTimeout(function(){
    console.log("Hello World!");
},3000);            // 3k mili seconds or 3s to run this function
*/

function createPerson(person, callback){
    setTimeout(function(){
        persons.push(person);
        callback();
    },2000);            // delay time set 
};

function getPerson(){
    setTimeout(function(){
        let output2 ='';
        persons.forEach(function(person){
            output2 += `<li>${person.firstname} ${person.lastname}</li>`
        })
        document.getElementById('output2').innerHTML = output2;
    },500);
};

createPerson({firstname: "Mr.", lastname: "Black"},getPerson);
