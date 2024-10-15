class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }

  class Model extends Car {
    constructor(brand, mod) {
      super(brand);  //super means call the parent constructor
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }

  let myCar = new Model("Ford", "Mustang");

  console.log(myCar.show());

  //classes delcaration are not hoisting