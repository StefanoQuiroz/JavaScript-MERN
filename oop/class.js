//First class in javascript
// First letter in nameClass in capital letter
class Vehicle{
    //constructor(arguments, arguments, arguments)
    //constructor is a method, also!!
    //the constructor is executed when a new instance is created
    constructor(manufacturer, model, color){
        //properties
        this.miles=0;
        this.manufacturer=manufacturer;
        this.model=model;
        this.color=color;
    }
    //Methods -> functions inside the class
    drive(){
        this.miles += 10;
    }
}

//To create a new instance we must provide the constructor with the following arguments   