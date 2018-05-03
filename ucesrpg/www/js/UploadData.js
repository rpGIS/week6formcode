function startDataUpload() {
alert ("start data upload");
var name = document.getElementById("name").value;
var surname = document.getElementById("surname").value;
var module = document.getElementById("module").value;
alert(name + " "+ surname + " "+module);
var postString = "name="+name +"&surname="+surname+"&module="+module;
processData(postString);

}
var client;
function processData(postString) {
 client = new XMLHttpRequest();
 client.open('POST','http://developer.cege.ucl.ac.uk:30286/uploadData',true);
 client.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 client.onreadystatechange = dataUploaded;
 client.send(postString);
}

function dataUploaded() {
 // this function listens out for the server to say that the data is ready - i.e.
 if (client.readyState == 4) {
 // change the DIV to show the response
 document.getElementById("dataUploadResult").innerHTML = client.responseText;
 }
}
