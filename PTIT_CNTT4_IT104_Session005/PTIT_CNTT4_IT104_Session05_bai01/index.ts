class Vehicle {

    constructor(
    public name: string,
    private year: number,
    protected company: string ) {}

    getYear(): number{
        return this.year;
    }
    getCompany() {
        return this.company;
    }
}
const vehicles = [
    new Vehicle("Toyota Corolla", 2020, "Toyota"),
    new Vehicle("Honda Civic", 2022, "Honda")
];
vehicles.forEach((v, i) => {
    console.log(`Vehicle ${i + 1}: ${v.name}, ${v.getYear()}, ${v.getCompany()}`);
});