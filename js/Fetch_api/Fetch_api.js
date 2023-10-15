/* 
The Fetch API is a modern interface that allows you to make HTTP requests to servers from web browsers.
If you have worked with XMLHttpRequest (XHR) object, the Fetch API can perform all the tasks as the XHR object does.
In addition, the Fetch API is much simpler and cleaner. It uses the Promise to deliver more flexible features to make requests to servers from the web browsers.
The fetch() method is available in the global scope that instructs the web browsers to send a request to a URL.
*/

document.getElementById('get_data').addEventListener('click',getData);

//xhr.open('GET', 'LINK', true)

/*
function getData(){
    console.log("Clicked");
    fetch('https://api.chucknorris.io/jokes/random')           //data server link
        .then(function(response){
            // console.log(response);
            // console.log(response.text());       // for text data
            // console.log(response.json());       // for json data
            return response.json();
        })
        .then(function(data){           // recieved data from server
            console.log(data);
        }).then(function(err){
            console.log(err);
        })
}
*/
// Shortend coode using arrow function

function getData(){
    fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(data => {console.log(data.value);})
    .catch(err => {console.log(err)})
};