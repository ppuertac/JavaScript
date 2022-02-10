var lista = document.getElementById("listalen")

function añadirlenguaje(){
    const element = document.createElement("li");
    const contenido = document.createTextNode("JavaScript");
    element.appendChild(contenido);
    lista.appendChild(element);
}