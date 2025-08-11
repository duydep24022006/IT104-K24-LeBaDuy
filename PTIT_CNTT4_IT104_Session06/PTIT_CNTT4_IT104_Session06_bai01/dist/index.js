"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Rectangle extends Shape {
    constructor(name, width, height) {
        super(name);
        this.width = width;
        this.height = height;
    }
    getSize() {
        console.log(`${this.getName()} có chiều rộng: ${this.width},chiều cao :${this.height}`);
    }
}
const rectangle = [
    new Rectangle("hinh chữ nhật A", 12, 10),
    new Rectangle("hinh chữ nhật B", 8, 10)
];
rectangle.forEach(item => {
    console.log(item.getName());
    item.getSize();
});
