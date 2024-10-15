// const String = {
//     name : "Bangladesh",
//     districts : 64,
//     slice: function(){

//     },
//     sunstring: function(){

//     }
// };

// const s = "Bangladesh";
// console.log(s.length);


// --------slice()------------------
// let str = "Apple", "Banana", "Orange";
// let banana = str.slice(7,13);
// console.log(banana);

// let str = "Apple", "Banana", "Orange";
// let banana = str.slice(-12,-6);
// console.log(banana);

// str.slice(7);  returns Mango Orange
// str.slice(-12);

// --------------substring()--------------
// similar to slice but cannot accept negative indexes
// let str = "Apple", "Banana", "Orange";
// let banana = str.slice(7,13);
// console.log(banana);

// --------------substr()-------------
// 2nd parameter length of the extracted part specify
// let str = "Apple", "Banana", "Orange";
// let banana = str.slice(7,6);
// console.log(banana);
// 2nd parameter omitted then rest of the string print

// -------------replace()--------------
// let str = "I love Bangladesh";
// let canada = str.replace("Bangladesh", "Canada");
// console.log(canada);
// returns a new String

// --------------Converting to uppercase and lowercase----------------
// let text1 = "Hello World";
// let text2 = text1.toUpperCase() ;
// console.log(text2);

// let text1 = "Hello World!";       // String
// let text2 = text1.toLowerCase();  // text2 is text1


// -------------------Concat()-------------------------------
// let text1 = "Hello";
// let text2 = "World!";
// let text3 = text1.concat(" ","arpita ",text2);

// ----------------------trim()----------------------------
// removes whitespace
// let text = "      Hello World      ";
// text.trim();

// ---------------------CharAt()-------------------------------
// let text = "HELLO WORLD";
// let char = text.charAt(0);

// let text = "HELLO WORLD;
// console.log(text.charAt(500));  empty
// console.log(text[500]); undefined

// ----------------------split()------------------------
// converting a string into an Array
// let text = "HELLO WORLD";
// console.log(text.split(","));  
// console.log(text.split(""));  

