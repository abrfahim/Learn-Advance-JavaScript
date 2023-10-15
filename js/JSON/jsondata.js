
var xmlhttp = new XMLHttpRequest();

xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 & this.status == 200){
        var data = this.responseText;
        //console.log(data);
        jsondata(data);
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

function jsondata(json_object){
    // console.log(json_data);
    var js_obj = JSON.parse(json_object);
    // console.log(js_obj);
    for(x in js_obj.persons){
        // console.log(x)  // only return properties
        var personsdata = js_obj.persons;
        //console.log(js_obj.persons[x]); // properties inner value
        console.log(personsdata[x]); // // properties inner value
        for(y in personsdata[x]){
            console.log(persons [x][y]);
        }
    }
};