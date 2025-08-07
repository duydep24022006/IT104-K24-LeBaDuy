interface Student{
    name: string ,
    age: number ,
    email:string
}

const student: Student={
    name: "le ba duy",
    age: 19,
    email:"duydeptrai@gmail.com"
}
const renderStudent = (student: Student): void =>{
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} tuổi và email của tôi là ${student.email}.`);  
}
renderStudent(student);