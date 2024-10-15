class Car {
    constructor(name, year) {
        this.name = name;  //amar nam/car er nam //this will denote the actual object(Toyota Car)
        debugger;
        this.year = year;   //propertry name will initialized by constructor function
    }

    play(status) {
        debugger;
        console.log(`${this.name} is ${this.year} toy which is ${status}`);  //here this means car1. prints toyota
    }
}

const car1 = new Car("Toyota"); //new syntax call the constructor function and set object name and year
const car2 = new Car("BMW", 2020); //create actual object
const car3 = new Car("Suzuki", 2021); //create actual object

car1.play("well");
car2.play("bad");
