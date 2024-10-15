//function...full function body stay in object
const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
  };
  console.log(person.fullName());



//getter...computed function(not give function body)
const person1 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    // get lang() {
    //   return this.language;
    // }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
  };

//   console.log(person.lang);
console.log(person.fullName);



//setter
const person2 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };

  person2.lang = "bn";
  console.log(person2);



//get outside curly braces
  const person3 = {
    firstName: "John",
    lastName: "Doe"
  };

  Object.defineProperty(person3, "fullName", {
    get : function () {
        return this.firstName + ' ' + this.lastName;
    }
  });
person3.age = 27;
console.log(person3.fullName);
