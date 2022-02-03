var dni = prompt("Introduzca su DNI sin letra");

console.log(dni);

if (dni < 0 || dni > 99999999){
    alert("Número no válido")
};

var array = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E", "T",];

var resto = dni % 23;

var letra = array[resto];

console.log("La letra de su DNI es:", letra);