
fetch('https://api.chucknorris.io/jokes/random')
    .then(response => response.json())
    .then(data => console.log(data.value));

console.log('Hello man');


// async await

async function getJokes(){
    let res = await fetch('https://api.chucknorris.io/jokes/random')
        let result = await res.json();
        let output = await result.value;
        return output;
}

getJokes().then(jokes =>console.log(jokes));