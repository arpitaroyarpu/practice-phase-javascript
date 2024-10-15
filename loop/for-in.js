//iterate object's each thing, do not use over an array for in loop bnecause order is important for array not for object
// const person = { fname: "Arpita", lname: "Roy", age: 23};

// for (let x in person) {
//     console.log(person[x]);
// }


const numbers = [45, 4, 9, 5, 6, 25];

for (let number in numbers) {  //number is an assistant variable that prints index number
    console.log(numbers[number]);

}