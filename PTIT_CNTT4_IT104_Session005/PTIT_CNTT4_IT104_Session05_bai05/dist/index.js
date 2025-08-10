"use strict";
class Rectangle {
    constructor(_width, _heigh) {
        this._width = _width;
        this._heigh = _heigh;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        if (value > 0) {
            this._width = value;
        }
        else {
            console.log("giá trị nhỏ hơn 0");
        }
    }
    get height() {
        return this._heigh;
    }
    set height(value) {
        if (value > 0) {
            this._width = value;
        }
        else {
            console.log("giá trị nhỏ hơn 0");
        }
    }
    get area() {
        return 2 * (this._width + this._heigh);
    }
    get perimeter() {
        return this._width * this._heigh;
    }
}
const rect = new Rectangle(5, 10);
console.log(`Rộng: ${rect.width}, Dài: ${rect.height}`);
console.log(`Chu vi: ${rect.perimeter}, Diện tích: ${rect.area}`);
rect.width = 8;
rect.height = 12;
console.log(`\nSau cập nhật:`);
console.log(`Rộng: ${rect.width}, Dài: ${rect.height}`);
console.log(`Chu vi: ${rect.perimeter}, Diện tích: ${rect.area}`);
