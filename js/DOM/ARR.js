// Add, Remove, Replace elements

let olitem = document.createElement('li');

// Add id/class
olitem.className = 'class2';
olitem.id = 'id2';

// Add attribute
olitem.setAttribute ('title', 'a title to new element');

olitem.appendChild(document.createTextNode('Javascript'));

document.querySelector('ol').appendChild(olitem);

console.log(olitem);

let ulItem = document.createElement('li');
let link = document.createElement('a');

link.appendChild(document.createTextNode('Instagram'));
link.setAttribute('href', 'https://www.instagram.com');

ulItem.appendChild(link);

document.querySelector('ul').appendChild(ulItem);

console.log(ulItem);

// Replacing Elements
let newHeading = document.createElement('h1');
newHeading.appendChild(document.createTextNode('H1 New Heading'));
newHeading.className = "sample-class";

let oldHeading = document.querySelector('h3');

let parent = document.querySelector('.container');
//parent = oldHeading.parentElement;
parent.replaceChild(newHeading, oldHeading);


console.log(newHeading);
console.log(oldHeading);
console.log(parent);


// Remove element

let lis = document.querySelectorAll('li');
let list = document.querySelector('ul');

lis[0].remove();
list.removeChild(lis[7]);

//
list.classList.add("test");
list.classList.add("test-new");
list.classList.remove("test-new");
let val = list.hasAttribute('title');
val = list.hasAttribute("class");
list.setAttribute("title", "Yes")
list.removeAttribute("title");
console.log(list);

//console.log(link); 