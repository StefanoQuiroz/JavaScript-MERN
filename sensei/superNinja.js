/*
class Ninja{
    constructor(nombre,salud, velocidad, fuerza){
        this.nombre=nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName(){
        console.log(`Nombre : ${this.nombre}`);        
    }
    showStats(){
        console.log(`Nombre: ${this.nombre}, Salud: ${this.salud}, Fuerza: ${this.fuerza}, Velocidad : ${this.velocidad} }`)
    }
    drinkSnake(){
        this.salud += 10;
    }
}
*/

const Ninja = require ("../ninja/ninja")

class Sensei extends Ninja{
    constructor(nombre){
        //super(nombre, 200, 10, 10);
        //Otra manera
        super(nombre);
        this.sabiduria = 10;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }
    speakWisdom(){
        //this.drinkSnake();
        super.drinkSake();
        return `Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses`;
    }
    showStats(){
        const { sabiduria } = this;
        const stats = super.showStats2();
        //el resto de los stats (nombre, salud, velocidad, fuerza)
        //concatena el metodo del Ninja con el metodo de Sensei
        return {...stats, sabiduria};
    }
}

const superSensei = new Sensei ("Master Splinter");
// console.log({superSensei});
superSensei.speakWisdom();
// console.log({superSensei});
//console.log(superSensei.speakWisdom());
console.log(superSensei.showStats());