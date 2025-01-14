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

async function course() {
    try{
    await enroll(); //promise return kore tai await..await is an expression
    await progress();
    const message = await getCertificate();

    console.log(message);
    }
    catch(err) {
    console.log(err);
    }
}

course();


     




