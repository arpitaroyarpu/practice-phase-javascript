// function isArray(myArray){
//   console.log(myArray.constructor.toString().indexOf('Array') > -1);
// }

// isArray([1, 2, 3]);
// isArray({fname: "Arpita"});


function isArray(myArray){
  console.log(myArray.constructor === Array)
}

isArray([1, 2, 3]); //return true

//any variable can be emptied by setting value to undefined
//car = undefined