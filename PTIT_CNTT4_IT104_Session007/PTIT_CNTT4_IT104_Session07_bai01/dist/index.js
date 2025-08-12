"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Name: ${this.name} Company: ${this.company}, Phone: ${this.phone}`);
    }
}
class Manager extends Employee {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(`teamSize: ${this.teamSize}`);
    }
}
const m1 = new Manager("Alice", "TechCorp", "0123456789", 5);
m1.printInfo();
