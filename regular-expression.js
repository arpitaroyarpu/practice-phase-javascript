//search function

// let text = "Arpita Roy";
// let n = text.search(/arpita/i);
// console.log(n);


//replace function

// let text = "Please visit Microsoft powered by microsoft";
// let n = text.replace(/microsoft/ig, "google");  //i - case insensitive, g - global flag
// console.log(n);


//test function

// const pattern = /e/;
// let n = pattern.test("The best thing in the world");  //return true or false
// console.log(n);


//exec function
const pattern = /e/;
let n = pattern.exec("The best thing in the world"); //return position
console.log(n);



