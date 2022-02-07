const vehiculo = prompt("coche, moto o bus");
const kmrecorridos = prompt("Km recorridos");

if (vehiculo = "coche"){
    precioKm = 0.10;
    precio = precioKm * parseInt(kmrecorridos)
}
else if (vehiculo = "moto"){
    precioKm = 0.20;
    precio = precioKm * parseInt(kmrecorridos)
}
else if (vehiculo = "autobus"){
    precioKm = 0.50;
    precio = precioKm * parseInt(kmrecorridos)
};


if (0 < kmrecorridos < 100){
    precioTotal = precio + 1
}
else if (kmrecorridos > 100){
    precioTotal = precio + 2
};

console.log(precioTotal)



