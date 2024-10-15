function myFunction(text) {
    console.log(text);
}
const button = document.getElementById('button');
const id = document.getElementById('id');

// button.addEventListener('click', myFunction); //no need to call..only function body/reference passed

button.addEventListener('click', function() {   //for parameter receive need to take anonymous function
    myFunction("Hello World");

}, true); //3rd parameter useCapture by default bubbling thakr means vitorer ta age fire hoy

id.addEventListener('click', function() {
    console.log('hello container');
}, true); //useCapture=true

button.addEventListener('click', function() {
    console.log('button clicked');
});

button.addEventListener('mouseover', function() {
    console.log('use put this mouse over this element');
});