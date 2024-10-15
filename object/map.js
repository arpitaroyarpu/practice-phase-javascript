//map is similar to object(key value pair)
//set is similar to array
//keys can be any data type in map also can be an object

const fruits = new Map();

//set map values
fruits.set(15, 300);
fruits.set("apple", 500);
fruits.set("mango", 200);

fruits.set("mango", 800);

fruits.get("apple"); //500


fruits.delete("apple");
fruits.has("apple"); //false

console.log(fruits);

fruits.delete("apple");
fruits.has("apple");