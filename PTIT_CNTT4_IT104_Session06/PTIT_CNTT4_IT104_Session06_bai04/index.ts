interface Geometry{
    calculateArea(): number;
    calculatePerimeter(): number;
};
class Circle implements Geometry{
    constructor(private radius: number) { };
    public calculateArea(): number {
        return Math.PI * Math.pow(this.radius, 2);
    }

    public calculatePerimeter(): number {
        return 2 * Math.PI * this.radius;
    }
}

class Rectangle implements Geometry{
    constructor(private width: number, private height: number) {}

    public calculateArea(): number {
        return this.width * this.height;
    }

    public calculatePerimeter(): number {
        return 2 * (this.width + this.height);
    }
}

const circle = new Circle(5); 
console.log(" Circle");
console.log("Area:", circle.calculateArea().toFixed(2));
console.log("Perimeter:", circle.calculatePerimeter().toFixed(2));

const rectangle = new Rectangle(4, 6);
console.log("\nRectangle");
console.log("Area:", rectangle.calculateArea());
console.log("Perimeter:", rectangle.calculatePerimeter());
