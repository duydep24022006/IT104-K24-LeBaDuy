"use strict";
const partialUpdate = (user, userUpdate) => {
    return Object.assign(Object.assign({}, user), userUpdate);
};
console.log(partialUpdate({ name: "Alice", age: 30, job: "Developer" }, { age: 31 }));
console.log(partialUpdate({ name: "Alice", age: 30, job: "Developer" }, { name: "Bob", job: "Designer" }));
