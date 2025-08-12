"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.id = id;
        this.id = id;
    }
    displayInfo() {
        console.log(`MSV: ${this.id},Tên SV:${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Môn học: ${this.subject},Tên giáo viên:${this.name}`);
    }
}
const student = new Student("duy", 1);
student.displayInfo();
const teacher = new Teacher("hai", "ts");
teacher.displayInfo();
