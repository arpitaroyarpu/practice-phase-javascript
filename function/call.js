//allk functions are methods
//because functions are always in invisible object..for normal function window is object
const a = {
    firstName: 'Arpita',
    sleep: function() {
        console.log(`${this.firstName} is sleeping`);
    }
}

a.sleep();


//call method(which is this define)
const person = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + city + country;
    }
};
const person1 = {
    firstName: "Arpita",
    lastName: "Roy"
};
const person2 = {
    firstName: "Kawser",
    lastName: "Ahmed"
}

console.log(person.fullName.call(person1, 'Comilla', 'Bangladesh'));  //person1 is this for function
//1st parameter will be always object which is considered as this

