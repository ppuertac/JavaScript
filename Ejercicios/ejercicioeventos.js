var boton = document.getElementById("boton");

boton.addEventListener("click", alerta);

function alerta(){
    alert("Guardado");
};


var inputnom =document.getElementById("input")

inputnom.addEventListener("focus", changeColorFocus);
function changeColorFocus(){
    inputnom.style.backgroundColor = "yellow"
}

inputnom.addEventListener("focusout", changeColorNoFocus);
function changeColorNoFocus(){
    inputnom.style.backgroundColor = "#9999FF"
}

