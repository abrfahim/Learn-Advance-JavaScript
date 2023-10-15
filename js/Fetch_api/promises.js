/* a promise is a good way to handle asynchronous operations. It is used to find out if the asynchronous operation is successfully completed or not. A promise may have one of three states. Pending. Fulfilled.
*/
// .then

let persons = [
    {firstname: "Abrar", lastname: "Fahim"},
    {firstname: "Sonet", lastname: "Chowdhury"},
    {firstname: "Xerin", lastname: "Khondokar"}
];

function createPerson(person, callback){
    let prom = new Promise((resolve, reject) => {
        persons.push(person);
        let err = false;
        if(!err){
            resolve();    // try to complete promise
        }else{
            reject('Something went wrong!')
        }
    })
    return prom;        // promise return
}

function getPerson(){
    setTimeout(function(){
        let output2 ='';
        persons.forEach(function(person){
            output2 += `<li>${person.firstname} ${person.lastname}</li>`
        })
        document.getElementById('output2').innerHTML = output2;
    },500);
};

createPerson({firstname: "Mr.", lastname: "Black"}).then(getPerson)
.catch(function(error){
    console.log(error);
});
