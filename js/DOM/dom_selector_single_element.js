
let val;
val = document.getElementById("document-title");  




// changing style

document.getElementById('document-title').style.color = 'blue';
document.getElementById('document-title').style.padding = '15px';
document.getElementById('document-title').style.textContent = 'Hi';
val.style.background = 'yellow';
val.textContent = "Hello World!";
val.innerHTML = "<i>New title here</i>";

// 
val1 = document.querySelector('#document-title');  // id
val2 = document.querySelector('.sample-class');  // class
val3 = document.querySelector('h3');  // tag

val4 = document.querySelector('ol');



console.log(val4);