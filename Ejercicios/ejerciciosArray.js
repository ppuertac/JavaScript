// const numbers = [3, 6, 7 , 10];
// // Map
// let numbersPlus = numbers.map(function(numero){
//     // let aux = numero + 1;
//     // return aux; (Se puede poner de esta forma o de la de abajo)
//     return numero + 1 
// });

// console.log(numbersPlus)



// Ejercicio todo en mayúscula
// const topics = ["Javascript", "Variables", "funciones", "condicionales", "bucles"]
// const mayuscula = topics.map(topic => topic.toUpperCase());
// mayuscula.reverse();
// console.log ("Mayúscula", mayuscula);



// Ejercicio filtrar pares e impares
// const number = [253, 8575, 1, 20, 562, 1233, 25, 27, 258, 254, 7485, 2683];
// // const pares = number.filter(function(numero){
// //     return numero%2 == 0
// // });
// // const impares = number.filter(function(numero){
// //     return numero%2 != 0
// // });

// // Ahora en función flecha:
// const pares = number.filter(numero => numero%2 === 0);
// const impares = number.filter(numero => numero%2 !== 0);

// console.log(pares)
// console.log(impares)



// Ejercicio concatenación de métodos
// const topics = ["Javascript", "Variables", "funciones", "condicionales", "bucles"]
// const last = topics.map(function(topic){
//     return topic.toUpperCase()
// }).reverse();

// console.log("Last", last)


// const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
// const final = meses.map(function(mes){
//     return mes.toLocaleUpperCase();
// }).filter(function(mes){
//     return mes.length > 7;
// });
// // .filter(mes => mes.length > 7)(También se puede poner así)
// // Por rendimiento habría que hacerlo al revés. Primero filtrar y luego pasarlo a mayúscula.

// console.log("Los meses con 7 letras son: ", final);



const valores = [20, 2, 58, 35, 13];
let valor = 0;

for (let i = 0; i < valores.length; i++){
    if (valores[i] > valor){
        valor = valores[i];
    }
};

console.log("El número mayor es " + valor);