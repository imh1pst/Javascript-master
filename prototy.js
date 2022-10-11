// Prototipos

const { objectTypeProperty } = require("@babel/types");

//prototype chain

let variable = [];
console.log(variable);

let variable2 = ["pedro, 234, null"];
console.log(variable.reverse);

//creamos una clase:
class Objeto {
    constructor(){};
    hablar(){
        console.log("hola")
    }
}
//instanciamos un objeto
const objeto =  new Objeto();

console.log(objeto);
console.log(objeto.__proto__);


//propiedad _proto_:
class Objeto {
    constructor(){};
    hablar(){
        console.log("hola")
    }
}
//instanciamos un objeto
const objeto2 =  new Objeto();

objeto.hablar = ()=>{
    console.log("modificado adentro")
}

//Modo Estricto (' strict ')

//variables declaradas
"use strict";
let nombre = "alan";
console.log(nombre);

//modificar propiedades (defineProperty() y writeable )
"use strict";
const obj = {};
Object.defineProperty(obj, 'nombre', {value:"pedor", writable: false});
obj.nombre = "gregory"
console.log(obj.nombre)

// prohibir que se definan nuevas propiedades









