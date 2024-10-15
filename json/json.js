//json format

// const persons = {
//     "employees":[
//         {"firstName":"Arpita", "lastName":"Roy"},
//         {"firstName":"Arti", "lastName":"Das"},
//         {"firstName":"Arpa", "lastName":"Saha"}
//     ]
// }


//json to valid object conversion

// let text = '{ "employees":[' +
//         '{"firstName":"Arpita", "lastName":"Roy"},' +
//         '{"firstName":"Arti", "lastName":"Das"},' +
//         '{"firstName":"Arpa", "lastName":"Saha"} ]}';

// const obj = JSON.parse(text);

// console.log(obj);

// console.log(obj.employees[0].firstName);



//valid object to json conversion

let person = {
    firstName: "Arpita",
    lastName: "Roy"

};

console.log(JSON.stringify(person));



