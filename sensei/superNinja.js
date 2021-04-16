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

class Sensei extends Ninja{
    constructor(nombre){
        super(nombre, 200, 10, 10);
    }
    speakWisdom(){
        super.drinkSnake();
        console.log(`Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses`);
    }
}

const superSensei = new Sensei ("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();