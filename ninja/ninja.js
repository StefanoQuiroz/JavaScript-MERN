class Ninja{
    //constructor(nombre)
    //constructor con valores predeterminados
    constructor(nombre, salud = 0, velocidad = 3, fuerza = 3){
        // {key : value}
        this.nombre=nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
        //en el constructor puedo llamar otros metodos de abajo
        //this.drinkSake();
    }
    sayName(){
        const { nombre } = this;
        return {nombre}; 
        //console.log({nombre: this.nombre});       
    }
    showStats(){
        //return `Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad : ${this.velocidad} y salud: ${this.salud}`;
        //return an object { }
        return {nombre: this.nombre, salud: this.salud, Velocidad: this.velocidad, fuerza: this.fuerza};
    }
    showStats2(){
        //Destucturacion
        const {nombre, salud, velocidad, fuerza} = this;
        //return an object { }
        return {nombre, salud, velocidad, fuerza};
    }
    drinkSake(){
        this.salud += 10;
    }
}
// expota funciones, objetos u otro dato primitivo dle modulo para que se utilicen en otros programas con el import.

/*
const ninja1 = new Ninja ("Hyabusa", 8);
console.log(ninja1.sayName());
ninja1.drinkSake();
console.log(ninja1.showStats());
console.log(ninja1.showStats2());
const stats = ninja1.showStats2();
console.log(stats);
*/
//Si no se comenta los console.logs se imprimen en el archivo donde los requiero => const Ninja = require(./archivo.js)
//Se coloca al último
module.exports = Ninja;

