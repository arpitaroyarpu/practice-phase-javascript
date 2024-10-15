const paymentSuccess = true;
const marks = 70;

function enroll(callback) {   //callback hocche porer step er kaj
    console.log('Course enrollment is in progess');

    setTimeout(function() {
        if(paymentSuccess) {
            callback();
        }
        else{
            console.log('Payment failed!');
        }

    }, 2000)
}

function progress(callback) {
    console.log('Course on progress....');

    setTimeout(function() {
        if(marks >= 80) {
            callback();
        }
        else{
            console.log('You could not get enough marks to get the certificate');
        }

    }, 3000);
}

function getCertificate() {
    console.log('Preparing your certificate!');

    setTimeout(function() {
        console.log('You got the certificate');
    }, 1000)
}

enroll(function() {   //enroll ekta function body er moddhe callback function take expect kore..shudhu progess dile parameter dite pari na(callback parameter)
    //anonymous funtion ta callback akare enroll hisebe jay
    progress(getCertificate);
});