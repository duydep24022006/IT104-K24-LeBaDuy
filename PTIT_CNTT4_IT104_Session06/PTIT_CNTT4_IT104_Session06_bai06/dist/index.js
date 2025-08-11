"use strict";
class Student {
    constructor(_id, _name) {
        this._id = _id;
        this._name = _name;
    }
    get id() {
        return this._id;
    }
    get name() {
        return this._name;
    }
    set name(v) {
        if (v.trim().length !== 0) {
            this._name = v;
        }
        else {
            console.log("không đc bỏ trống tên");
        }
    }
}
const allStudents = [
    new Student(0, "duy"),
    new Student(1, "duy đẹp trai"),
    new Student(2, "duy duy"),
    new Student(3, "duy dak"),
    new Student(4, "duy 2"),
    new Student(5, "duy dak")
];
class Classroom {
    constructor() {
        this.students = [];
    }
    showStudents() {
        this.students.forEach(std => {
            console.log(`id:${std.id} ,name:${std.name}`);
        });
    }
    addStudent(std) {
        this.students.push(std);
    }
    filterStudent(id) {
        return this.students.find(item => item.id === id);
    }
    addStudentInClass(studentId) {
        const index = allStudents.findIndex(item => item.id === studentId);
        if (index !== -1) {
            const student = allStudents[index];
            this.students.push(student);
            allStudents.splice(index, 1);
        }
        else {
            console.log("không tim thấy học sinh có id: " + studentId);
        }
    }
}
const classA = new Classroom();
const classB = new Classroom();
classA.addStudentInClass(0);
classA.addStudentInClass(1);
classA.addStudentInClass(2);
classB.addStudentInClass(3);
classB.addStudentInClass(4);
classB.addStudentInClass(5);
console.log(" Lớp A ");
classA.showStudents();
console.log("\n Lớp B ");
classB.showStudents();
console.log("\n Học sinh còn lại trong allStudents ");
console.log(allStudents);
