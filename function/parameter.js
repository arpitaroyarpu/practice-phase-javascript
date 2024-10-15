function a(x, y = 5) {
    console.log(arguments);
    return x * y;
}

console.log(a(3, 4));
console.log(a("arpita", 5));
console.log(a(2, 3, 45, 5));
console.log(a(3)); //return NaN, y undefined



//Arguments passed by value(primitive values)
function b(x, y) {
    x = x + 50;
    return x - y;
}

let m = 5;
let n = 6;

console.log(b(m, n));
console.log(m);  //m will not changes. m's location didn't go. m and n just go through value




//Objects passed by reference
function c(x) {
    x.one = 7;
    return x.one * x.two;

}

let d = {
    one: 3,
    two: 5
}

console.log(c(d));
console.log(d); //value of one is changed by 7. pointer will go.
//changes of object properties are visible outside function

