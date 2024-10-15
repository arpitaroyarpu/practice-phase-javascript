//Implicit function binding

const person = {
    firstName: "Arpita",
    lastName: "Roy",
    id: 2012020315,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    },
    // getFullName: function(){
    //     return this.fullName();
    // }
};

// console.log(person.getFullName());
console.log(person.fullName());



//Explicit function binding

const person1 = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

const person2 = {
    firstName: "Arpita",
    lastName: "Roy",
}

console.log(person1.fullName.call(person2)); //here the person2 argument means this
//dot er age je thake takei this mone korbe
//this denote a object