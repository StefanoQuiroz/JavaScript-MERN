//Implementing new class own
class Vehicle{
    constructor(manufacturer, model, color){
        this.miles = 0;
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
    }
    drive(){
        this.miles += 10
    }
}

class Sedan extends Vehicle{
    constructor(color, hp){
        super("Ford", "F-150", color);
        this.hp = hp;
    }
    printSpecSumary(){
        //this accesses to the property
        console.log(`Ford f-150 ${this.color} with a 4.4L V8 TwinTurbo engine packin ${this.hp}hp`)
    }
}

const sedan = new Sedan("Blue",450);
sedan.printSpecSumary();