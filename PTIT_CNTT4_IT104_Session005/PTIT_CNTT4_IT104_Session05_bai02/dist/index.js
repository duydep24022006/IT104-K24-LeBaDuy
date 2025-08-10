"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    getEmail() {
        return this.email;
    }
}
const students = [
    new Student(1, 98, "memay@gamil.com"),
    new Student(2, 89, "bomayday@gmail.com")
];
students.forEach((v, i) => {
    console.log(`Student ID: ${v.id},age: ${v.age}, Email: ${v.getEmail()}`);
});
