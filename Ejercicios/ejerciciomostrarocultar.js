//Sin hacer

var caja = document.getElementById("caja")

function añadirparrafo(){
    const element = document.createElement("p");
    const contenido = document.createTextNode("Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis ea harum ullam quam error sint numquam ipsam et quod, libero aut. Doloribus tenetur qui aperiam quod et dolorum magni.");
    element.appendChild(contenido);
    caja.appendChild(element);
}

function eliminarparrafo(){
    const element = document.getElementsByTagName('p');
    const input = document.getSelection('Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem veritatis ea harum ullam quam error sint numquam ipsam et quod, libero aut. Doloribus tenetur qui aperiam quod et dolorum magni.');
    element.removeChild(input)
}

