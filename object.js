const car = {
    name: "Fiat",
    model: 500,
    weight: "850kg",
    color: "white",
    start: function(){
        this.drive(); //function er moddhe function call
        console.log('car has started');
    },
    drive: function(){
        console.log('car is driving');
    },

};
console.log(car.weight);
console.log(car['model']);
car.start();


// variable can assign 1 value but object can assign multiple values
// object ke const diye denote kora hoy as we can change object property
// direct value likhe dile this is called literals