//find duplicate values in an array

const numbers = [1, 4, 5, 5, 6, 7, 7, 8, 9, 4];

const duplicates = numbers.filter(function(value, index, array){
    return array.indexOf(value) !== index  //indexOf return first index number

});

console.log(duplicates);


//find unique values in an array

// const numbers = [1, 4, 5, 5, 6, 7, 7, 8, 9, 4];

// const duplicates = numbers.filter(function(value, index, array){
//     return array.indexOf(value) === index

// });

// console.log(duplicates);
