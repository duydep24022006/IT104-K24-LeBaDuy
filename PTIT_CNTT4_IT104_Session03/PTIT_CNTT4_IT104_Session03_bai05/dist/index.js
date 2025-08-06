"use strict";
let firstName = "bá";
let lastName = "duy";
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
const fullName = firstName + " " + lastName;
console.log(fullName);
