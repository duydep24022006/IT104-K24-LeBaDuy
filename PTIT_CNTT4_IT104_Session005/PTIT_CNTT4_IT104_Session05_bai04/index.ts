class Vehicle {
    constructor(
        public readonly id:number,
        public name: string,
        protected year: number,
        private company: string 
    ) { }
    getYear(): number{
        return this.year;
    }
    getCompany() {
        return this.company;
    }
}

const vehicles = [
    new Vehicle(1,"Toyota Corolla", 2020, "Toyota"),
    new Vehicle(2,"Honda Civic", 2022, "Honda")
];
vehicles.forEach(v => {
    console.log(`Vehicle id: ${v.id}: ${v.name}, ${v.getYear()}, ${v.getCompany()}`);
});