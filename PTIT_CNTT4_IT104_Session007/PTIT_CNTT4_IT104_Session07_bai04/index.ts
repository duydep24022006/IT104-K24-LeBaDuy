abstract class Person{
    constructor(
        public name:string
    ) { } 
    public abstract displayInfo(): void;
}

class Student extends Person{
    constructor(
        name: string,
        public id:number
    ) { 
        super(name);
        this.id = id;
    } 
    public displayInfo(): void {
        console.log(`MSV: ${this.id},Tên SV:${this.name}`);
    }
}
class Teacher extends Person{
    constructor(
        name: string,
        public subject:string
    ) { 
        super(name);
        this.subject = subject;
    } 
    public displayInfo(): void {
        console.log(`Môn học: ${this.subject},Tên giáo viên:${this.name}`);
    }
}


const student = new Student("duy", 1);
student.displayInfo();

const teacher = new Teacher("hai", "ts");
teacher.displayInfo();
