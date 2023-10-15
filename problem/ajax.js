// last class
// api address not found

// API - API stands for Application Programming Interface. 
// Restful API - RESTful API is an interface that two computer systems use to exchange information securely over the internet.

document.getElementById('jokes_data').addEventListener('click',loadingJokes);


function loadingJokes(e){
    let xhr = new XMLHttpRequest();
    let number = document.getElementById('num_jokes').value;
    xhr.open('GET','https://api.chucknorris.io/jokes/random/${number}',true);
    xhr.onload = function(){
        if(this.status===200){
            let data = JSON.parse(this.responseText);
        //    console.log(data);
            let yourjokes = data.value;  // jokes stores in value so value need to call
            console.log(yourjokes);
            let output = "<ol>";

            yourjokes.foreach(function(item){
                // console.log(item.joke);
                output += `<li>${item.yourjokes}</li>`
           });
            output = "</ol>";
            document.getElementById('output').innerHTML = output;
        }
    }

    xhr.send();
}