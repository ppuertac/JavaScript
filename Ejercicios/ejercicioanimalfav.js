
// var animal = prompt("Escriba su animal favorito");
// var element = document.getElementById("resultado");


// if (animal.toLowerCase() === "gato"){
//     element.innerHTML = "¡Correcto!";
//     element.style.color = "green";
//     document.getElementById("foto").classList.remove("hide")
// }

// else {
//     element.innerHTML = "¡Incorrecto!";
//     element.style.color = "red";
//     foto.hidden = true
// }




//Otro ejercicio:

var boton = document.getElementById("myBtn");

boton.addEventListener("click", showMessage);

function showMessage(){
    console.log("Has hecho click");
}