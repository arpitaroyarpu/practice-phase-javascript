function temporary() {
    let counter = 0;

    //closure
    return function() {
        counter += 1;
    }
}

const add = temporary(); //add is a function at the end

console.dir(add);  //closure/bondhoni re vore niye chole gese
add(); //1
add(); //2

//closure is a function having access to the parent scope, even after the parent function has closed