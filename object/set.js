const letters = new Set(["a", "b", "c", "d", "a"]);
const letter = ["a", "b", "c"];

console.log(typeof letters);
console.log(letters instanceof Set);
console.log(letter instanceof Set); //check set

const lettersIterator = letters.values();

for(let a of lettersIterator) {
    console.log(a);
}