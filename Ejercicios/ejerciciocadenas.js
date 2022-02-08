const esri = "esri";
const letra = esri.charAt(0).toUpperCase();
const resto = esri.slice(1);

console.log(letra);
console.log(resto);
console.log(letra + resto);


const esri2 = "environmental systems research institute";

const mayusculas = esri2.charAt(0).toUpperCase() + esri2.substring(1,14) + esri2.charAt(14).toUpperCase() + esri2.substring(15,22) + esri2.charAt(22).toUpperCase() + esri2.substring(23,31) + esri2.charAt(31).toUpperCase() + esri2.substring(32);

console.log(mayusculas);