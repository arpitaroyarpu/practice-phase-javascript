//sort the students roll number serially

const roll_numbers = [3, 5, 1, 4, 2, 56, 15];

console.log(roll_numbers.sort(function(a, b){
    return a - b;
}));