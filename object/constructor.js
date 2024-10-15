// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() {
//         return this.firstName + ' ' + this.lastName;
//     }
//   };

  function Person(first, last, age) { //constructor function(blueprint/kathamo/not changeable)
    this.firstName = first;  //this will denote the particular person(arpita, arpi, kawser)
    this.lastName = last;
    this.age = age;
    this.fullName = function() {
        return this.firstName + ' ' + this.lastName;
    }

}

const arpita = new Person('arpita', 'roy', 23);
const arpi = new Person('arpi', 'roy', 23);
const kawser = new Person('kawser', 'ahmed', 24);

arpita.country = "Bangladesh";
Person.prototype.country = "Canada"; //available for all object..create after

console.dir(Person);

console.log(arpita);
console.log(kawser.country);

//Math is not a contructor function