"use strict";
;
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    ;
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
    calculatePerimeter() {
        return 2 * Math.PI * this.radius;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
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
