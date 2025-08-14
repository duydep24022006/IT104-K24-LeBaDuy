"use strict";
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const person = { date: 2006, age: 25 };
const job = { title: "Developer", salary: 2000 };
console.log(mergeObjects(person, job));
