class Employee{
    constructor(
        public name: string,
        protected company: string,
        private phone:string
    ) { }
    public printInfo():void {
        console.log(`Name: ${this.name} Company: ${this.company}, Phone: ${this.phone}`);
    }
}

class Manager extends Employee{
    constructor(
        name: string,
        company: string,
        phone: string,
        private teamSize:number
    ) { 
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    override printInfo(): void {
        super.printInfo();
        console.log(`teamSize: ${this.teamSize}`);
    }
}
const m1 = new Manager("Alice", "TechCorp", "0123456789", 5);
m1.printInfo();