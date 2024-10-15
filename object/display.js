const person = {
    name: "Arpita",
    age: 23,
    city: "Comilla"
};


//display object values by for in loop
// let text = '';
// for(let x in person) {
//     text += person[x];
// }

// document.getElementById("demo").innerHTML = text;


//display by array and for of loop
// const personArray = Object.values(person);

// for(x of personArray) {
//     console.log(x);
// }


//display as an string
console.log(typeof JSON.stringify(person));

