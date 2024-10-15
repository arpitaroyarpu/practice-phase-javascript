//literal syntax as we directly assigned values rather than creating object
const person = {  //as we don't reassign, we should use const not let
    name: 'Arpita',
    age: 23,
    getName: function() {  //method in object
        return 'Arpita'
    }
};

person.name = "love";  //muted or change the object property

let number = 3;
number = 4;