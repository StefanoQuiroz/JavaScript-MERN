class Ninja{
    constructor(nombre){
        this.nombre=nombre;
        this.salud = 0;
        this.velocidad = 3;
        this.fuerza = 3;
    }
    sayName(){
        console.log(`Nombre : ${this.nombre}`);        
    }
    showStats(){
        console.log(`Nombre: ${this.nombre}, Fuerza: ${this.fuerza}, Velocidad : ${this.velocidad} y salud: ${this.salud}`);
    }
    drinkSnake(){
        this.salud += 10;
    }
}

// const ninja1 = new Ninja ("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSnake();
// ninja1.showStats();