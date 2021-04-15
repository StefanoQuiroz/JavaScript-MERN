//Implementing class Vehicle
class Vehicle {
    constructor(manufacturer, model, color){
        this.manufacturer = manufacturer;
        this.model = model;
        this.color = color;
        this.miles = 0;
    }
    drive(){
        this.miles += 10;
        //curiosity this.constructor.name => nameClass, great!!
        console.log(`You drove your ${this.constructor.name} and it now has ${this.miles} miles on it`);
        console.log(`You drove your ${this.manufacturer} and it now has ${this.miles} miles on it`);
    }
    parentFunction(){
        return "This is coming from the parent!";
    }
}
//Implementig class M5
class M5 extends Vehicle {
    constructor(color){
        super("BMW", "M5", color);
        //calling Vehicle´s constructor
    }
    childFunction(){
        //using super, we can call the method parentFunction() class Vehicle{ }
        const message = super.parentFunction();
        console.log(message);
    }
}

const m5 = new M5("Blue");
m5.childFunction();



// const car = new Vehicle("Chevrolet", "Capricce", "brown");
// car.drive();
// console.log(car.parentFunction());