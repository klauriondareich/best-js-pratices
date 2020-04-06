"use strict"
// K Laurion D JS Developer

// Using Object.assign for defaults Values
const student_card = (student_input) =>{
    let defaults_inputs = {
        name: "Unknow",
        age: 29,
        class: "Terminal",
        date_of_birth: null,
        teacher: "Mr Paul"
    };
    defaults_inputs = Object.assign(defaults_inputs, student_input);
    console.log(defaults_inputs);
};
student_card({name:"Malonga Pierre", date_of_birth:"29/12/97"});

// Make an Object property readonly

let master_card = {
    owner_name: "Mr Jhon",
    expired_date: "12/03/2020"
}
Object.defineProperty(master_card, "code", {
    value: "3653364836",
    enumerable: true,
    writable: false,
    configurable: false
});
master_card.code = "453";
console.log(master_card.code);

// Protect Object property
const config = {
  apiKey: "kdgsyd12jd5jdls7dh"
}
Object.freeze(config);
console.log(config.apiKey);
