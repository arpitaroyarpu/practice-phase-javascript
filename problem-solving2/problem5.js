//find the falsy values from an array and remove those.

const mixedArray = [true, 42, "", null, "hello", undefined, 3.14];

// const trueArray = mixedArray.filter(function(el) {
//     if(el) {
//         return true;
//     }
//     else {
//         return false;

//     }

// });

const trueArray = mixedArray.filter(Boolean);


console.log(trueArray);