class Student {
    constructor(
        public readonly id: number,
        public age: number,
        private email:string
    ) { }
    getEmail(): string{
        return this.email;
    }
}

const students = [
    new Student(1, 98, "memay@gamil.com"),
    new Student(2, 89, "bomayday@gmail.com")
]; 

students.forEach((v, i) => {
    console.log(`Student ID: ${v.id},age: ${v.age}, Email: ${v.getEmail()}`);
    
})