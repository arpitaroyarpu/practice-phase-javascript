//find the falsy values from an object and remove those.

const obj = {
    isActive: true,
    count: 0,
    name: "",
    age: null,
    city: "New York",
    data: undefined,
    score: NaN
};

const truethyObject = function(obj) {
    for(let i in obj) {
        if(!obj[i]) {     //if the value is falsy
            delete obj[i];
        }
    }
    return obj;
}

console.log(truethyObject(obj));