// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array){
//     console.log(value);
//     console.log(index);
//     console.log(array);
//     console.log('------------');
// }
// //array method
// numbers.forEach(myFunction);



// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value){
//     return value * 2;
// }
// //array method
// const newNumbers = numbers.map(myFunction);
// console.log(newNumbers);



// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array){
//     return value > 10;
// }
// //array method
// const newNumbers = numbers.filter(myFunction);
// console.log(newNumbers);



// const numbers = [45, 4, 9, 16, 25];

// function myFunction(total, value, index, array){
//     console.log(total);  //first time value 0
//     console.log('------------');
//     return total + value;
    
// }
// //array method
// const newNumbers = numbers.reduce(myFunction, 10); //10 is the initial value   
// console.log(newNumbers);
//when need to return a single value from a array such as addition,subtraction then we need to use reduce function



// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array){
//     return value > 18;    //false .. if every value is greater than 18 then return true
// }
// //array method
// const newNumbers = numbers.every(myFunction); 
// console.log(newNumbers);


// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array){
//     return value > 18;    //true .. if one value is greater than 18 then return true
// }
// //array method
// const newNumbers = numbers.some(myFunction); 
// console.log(newNumbers);


// const numbers = [45, 4, 9, 16, 25];

// function myFunction(value, index, array){
//     return value > 18;    //45 .. first value that is greater than 18
// }
// //array method
// const newNumber = numbers.find(myFunction); 
// console.log(newNumber);


// console.log(Array.from("ABCDEFG"));  //string is a iterable object


const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();
console.log(keys);