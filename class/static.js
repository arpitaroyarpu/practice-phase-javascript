class Model extends Car {
    constructor(brand, mod) {
      super(brand);  //super means call the parent constructor
      this.model = mod;
    }
    static show(x) {
      return this.present() + ', it is a ' + this.model;
    }
  }

//   let myCar = new Model("Ford", "Mustang");  //no need to create real object
//console.log(Model.show(myCar));  //send through parameter of created..to use object

  console.log(Model.show());

  //without object creating we can use static method outside class
  