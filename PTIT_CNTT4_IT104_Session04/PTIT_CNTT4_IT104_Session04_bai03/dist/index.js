"use strict";
const student = {
    name: "le ba duy",
    age: 19,
    email: "duydeptrai@gmail.com"
};
const renderStudent = (student) => {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);
};
renderStudent(student);
