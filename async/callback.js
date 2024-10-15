//kono ekta function er moddhe jodi artekta function parameter hisebe jay seta callback function


// function display(some) {
//     console.log(some);
//   }
  
//   function calculator(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
//   }
  
//   let result = calculator(5, 5);
//   display(result);


//if displayed or not decided by callback parameter(calculation + display)
function display(some) {
    console.log(some);
  }
  
  function calculator(num1, num2, callback) {
    let sum = num1 + num2;

    if(callback) callback(sum);
    return sum;
  }
  
  let result = calculator(5, 5, display);  //display argument will show the result
  console.log(result);



  //callback function
  function calculator1(num1, num2, callback) {
    let sum = num1 + num2;

    if(callback) callback(sum);
    return sum;
  }
  
  calculator(5, 5, function(result) {     //callback call korle(callback(sum)) ei function ta call hobe (result parameter = sum parameter)
    console.log(result);
  }); 
