var element1 = document.getElementById("dewey");
console.log("id", element1);

var labels = document.getElementsByTagName("label");
console.log("labels", labels);

var labelsCSS = document.getElementsByClassName("label-input");
console.log(labelsCSS)

var names = document.getElementsByName("drone");
console.log(names);

var element = document.querySelectorAll("#huey");
console.log(element);

document.getElementById("nameFirst").innerHTML = "Chao"

console.log("padre", nameFirst.parentNode);

//Borrar nodos: seleccionar al padre y al hijo y usar la función removechild():
let firstOption = document.getElementById("first-option");
let inputdelete = document.getElementById("huey");

firstOption.removeChild(inputdelete);


