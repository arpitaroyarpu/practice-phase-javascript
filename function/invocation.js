function a() {
    console.log(this);  //returns window. window object own the function(which is this). window owner/parent
}

a();



const x = {
    a: function() {
        console.log(this);
    }
}

x.a(); //returns function body/object
//which comes before dot is this



//Invoking a Function with a Function Constructor
function myFunction(arg1, arg2) {
    this.firstName = arg1;  //this keyword has no value here
    this.lastName  = arg2;
  }

  const arpita = new myFunction("Arpita", "Roy"); //here cretead the object value
  console.log(arpita.firstName);

  //By whom function is called means invocation
  