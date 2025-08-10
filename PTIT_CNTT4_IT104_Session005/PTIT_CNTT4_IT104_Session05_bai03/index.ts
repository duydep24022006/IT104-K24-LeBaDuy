class Employee{
    constructor(
        public name: string,
        protected company: string,
        private phone:string
    ) { };
    getCompany() {
        return this.company;
    }
    getPhone() {
        return this.phone;
    }
}

const printInfo = (employee: Employee[]):void => {
    employee.forEach(item => {
        console.log(`Employee: Name:${item.name} ,Company:${item.getCompany()}, Phone:${item.name}`); 
    });
}

const employees: Employee[] = [
    new Employee("Nguyễn Văn A", "Google", "0123-456-789"),
    new Employee("Trần Thị B", "Microsoft", "0987-654-321"),
    new Employee("Lê Văn C", "Amazon", "0912-345-678")
];

printInfo(employees);