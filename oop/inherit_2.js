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
}

const car = new Vehicle("Chevrolet", "Capricce", "brown");
car.drive();