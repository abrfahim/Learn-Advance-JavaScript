// open even.html file
// event help to run js code by element

// Better Learning - https://www.w3schools.com/JS/js_events_examples.asp

function message(){
    console.log("Mouse over button working");
}

function message2(){
    console.log("This message came from btn4");
}
// Event Listener

let btn4 = document.getElementById('button4');

btn4.addEventListener('click', message2);
console.log(btn4);