const nums = [1, 2, 3];

console.dir(nums);  //Symbol.iterator is in prototype of nums array

const numIterator = nums[Symbol.iterator]();  //iterator object

// for(let n of numbers) {
//     console.log(n);
// }

console.log(numIterator.next());  //next function
console.log(numIterator.next());
console.log(numIterator.next());
console.log(numIterator.next());



//make a object iterable
const myNumbers = {};

myNumbers[Symbol.iterator] = function() {
    let n = 0;
    let done = false;
    return {
        next() {
            n += 10;
            if(n == 100) {
                done = true
            }
            return {
                value: n,
                done: done
            }

        }
    }
}

for (let num of myNumbers) {
    console.log(num);
}