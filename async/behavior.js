//by default synchronous behavior
// function hello() {
//     console.log('This is line 2');
// }

// console.log('This is line 1');
// hello();
// console.log('This is line 3');


//asynchronous behavior
console.log('This is line 1');

// setTimeout(function() {
//     console.log('This is line 2');  //callback function
// }, 2000);

setInterval(function() {
    console.log('This is line 2');  //callback function
}, 2000);

console.log('This is line 3');

