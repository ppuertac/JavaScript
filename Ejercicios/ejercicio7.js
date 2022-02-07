

function checkNumber(numero){
    if (numero%2 == 0){
        return "Número par";
    }   else {
        return "Número impar";
    }
};

let value = checkNumber(28)
console.log(value)