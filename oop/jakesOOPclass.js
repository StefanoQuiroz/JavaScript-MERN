class Vehicle {
    constructor(manufacturer, model, color){
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }
    drive(){
        this.miles += 10;
    }

    parentFunction(){
        return "This is coming from the parent!";
    }
}

class M5 extends Vehicle {
    constructor(color){
        super("BMW", "M5", color);
    }
    childFunction(){
        //Priortiy with functions inside the class
        //const message = this.parentFunction();
        //Calling the parentFunction() from class Parent
        const message = super.parentFunction();    
        console.log(`${message}`);
    }
    parentFunction(){
        return `This came from M5`;
    }
}

const myCar = new M5 ("Ford", "f-200", "blue");
myCar.drive();
const {miles: myCarMiles} = myCar;
console.log(myCarMiles);
myCar.childFunction();


// const myCar = new Vehicle("Ford", "f-200", "blue");
// const { manufacturer: myCarManufact} = myCar;
// console.log({myCarManufact});
// Same
// console.log(myCar.manufacturer);

