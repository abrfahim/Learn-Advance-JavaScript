// AJAX = Asynchronous Javascript And XML
// get data without loading the page

document.getElementById('get_data').addEventListener('click',loadData);


function loadData(){
    //console.log("Button Clicked");
    // create XHR object - Xml Http Request
    let xhr = new XMLHttpRequest();
    //console.log(xhr);
    // xhr.open('GET','js\AJAX\data.txt',true);
    xhr.open('GET','data.txt',true)
    xhr.onload = function(){
        /* 
        Http Statues:
        200: "OK"
        403: "Forbidden"
        404: "Not Found"
        */
       if(this.status === 200){
        //console.log(this.responseText);
        document.getElementById('output').innerHTML = `<h5>${this.responseText}</h5>`
       }
    }
    xhr.send();
    console.log(xhr);
};
