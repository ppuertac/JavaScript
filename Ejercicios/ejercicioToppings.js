var heladosintopping = "sin topping"
var oreo = "oreo"
var kitkat = "kitkat"
var brownie = "brownie"
var lacasitos = "lacasitos"

var preciosintopping = 1.90
var preciooreo = 1
var preciokitkat = 1.50
var precioobrownie = 0.75
var preciolacasitos = 0.95

var helado = prompt("Escriba su topping tal cual aparece en la lista")

helado = helado.toLowerCase()

if (helado == heladosintopping){
    alert(preciosintopping)
}
else if (helado == oreo){
        alert(preciosintopping + preciooreo)
    }
else if (helado == kitkat){
        alert(preciosintopping + preciokitkat)
    }
else if (helado == brownie){
        alert(preciosintopping + precioobrownie)
    }
else if (helado == lacasitos){
        alert(preciosintopping + preciolacasitos)
    }
else {
    alert("No tenemos este topping, lo sentimos. El precio del helado sin topping es " + preciosintopping)
    }