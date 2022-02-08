// Creación de clase:
// class Food { //Las clases las ponemos en mayúscula
//     value = 10;
//     color = "red";
//     eat (){
//         console.log("yummy");
//     }
// }


// //Instancia clase:
// const apple = new Food();
// apple.type = "Reineta";
// apple.show = () => console.log("Es una manzana");
// apple.hide = function(){
//     return "Nope"
// }

// const donut = new Food();


// class Coche{
//     constructor(marca, color){
//         this.brand = marca;
//         this.color = color;
//         this.show = function(){
//             return "El coche es de marca " + this.brand;
//         }
//     }
//     run (){
//         console.log("Listo")
//     }
// }

// const hyundai = new Coche("Hyundai", "verde");
// const coche2 = new Coche("Kia", "yellow")



//Ejercicio 12:
class Perimetro{
    constructor(lado){
        this.area = lado*lado;
        this.perimetro = lado*4;
    }
    //También se puede hacer:
        // this.calcula = function(){
        //     return "El perímetro del cuadrado es " + this.perimetro + " cm" + " y su área es " + this.area + " cm^2"
        // }
    calcula(){
        return "El perímetro del cuadrado es " + this.perimetro + " cm" + " y su área es " + this.area + " cm^2"
    }
}

const pequeño = new Perimetro(2)
const mediano = new Perimetro(5)
const grande = new Perimetro(10)