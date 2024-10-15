// try {
//   //regular code
// }catch(err) {
//   console.log(err);
// }

let x = 12;
 try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number"
    x = Number(x);
    if(x < 5) throw "Too low";
    if(x > 10) throw {
        message: "Too high",
        name: "high error"

 };
}

 catch(err) {
    console.log(err);
 }

 console.log("This is a test");