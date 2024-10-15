const paymentSuccess = true;
const marks = 70;

function enroll() {   //callback hocche porer step er kaj
    console.log('Course enrollment is in progess');

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(paymentSuccess) {
                resolve();
            }
            else{
                reject('Payment failed!');
            }
    
        }, 2000)
    });
    
    return promise;
}

function progress() {
    console.log('Course on progress....');

    
    const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        if(marks >= 80) {
            resolve();
        }
        else{
            reject('You could not get enough marks to get the certificate');
        }

    }, 3000);
});
 
    return promise;
}

function getCertificate() {
    console.log('Preparing your certificate!');

    const promise = new Promise(function(resolve) {
    setTimeout(function() {
        resolve('You got the certificate');
    }, 1000);
});
    return promise;
}

enroll()   //promise er equivalent
      .then(progress)  //jehetu kono parameter expect kore na tai sorasori function body dite hobe
      //then function body expect kore,, parameter lagbe na
      .then(getCertificate)
      .then(function(value) {
        console.log(value);
      })
      .catch(function(err) {
        console.log(err);
      })

     




