"use strict";
class Vehicle {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getYear() {
        return this.year;
    }
    getCompany() {
        return this.company;
    }
}
const vehicles = [
    new Vehicle(1, "Toyota Corolla", 2020, "Toyota"),
    new Vehicle(2, "Honda Civic", 2022, "Honda")
];
vehicles.forEach(v => {
    console.log(`Vehicle ${v.id}: ${v.name}, ${v.getYear()}, ${v.getCompany()}`);
});
