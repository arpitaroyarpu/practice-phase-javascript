const status = true;

console.log('Task 1');

//promise definition
const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if(status) {
            resolve('Task 2');
        }
        else{
            reject('failed!');
        }
        
    }, 2000);
});


//promise call
promise
     .then(function(value) {  //resolve er value receive korbe..object,array ja iccha dewa jabe as a value
        console.log(value);
     })
     .catch(function(err) {
        console.log(err);
     })


console.log('Task 1');

