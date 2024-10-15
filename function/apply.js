const person = {
    fullName: function(city, country, x) {
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

console.log(person.fullName.apply(person1, ["Comilla", "Bangladesh", "X"])); 