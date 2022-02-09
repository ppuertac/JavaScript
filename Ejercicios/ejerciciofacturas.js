class Cliente{
    constructor(nombre, direccion, telefono, nif){
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
    }
};

class Elemento{
    constructor(descripcion, cantidad, precio){
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.precio = precio;
    }
};

class Factura{
    constructor(cliente, elementos){
    this.cliente = cliente;
    this.elementos = elementos;
    this.info = {
        baseImponible: 0,
        iva: 21,
        total: 0,
        formapago: "contado"
    }
    this.preciofinal = function(){
        for (let i = 0; i < this.elementos.length; i++){
            this.info.baseImponible += this.elementos[i].cantidad*this.elementos[i].precio;
        }
        console.log("Base imponible:", this.info.baseImponible)
        this.info.total = this.info.baseImponible*(1+(this.info.iva/100))
        console.log("Total:", this.info.total)
    }
    }
};


const cliente1 = new Cliente("pepito", "kalea", 652, "58");
const art1 = new Elemento("boli", 5, 1);
const art2 = new Elemento("lapiz", 1, 2);

const bill = new Factura(cliente1, [art1, art2]);