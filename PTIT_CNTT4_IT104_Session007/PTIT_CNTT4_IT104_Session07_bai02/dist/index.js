"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(amount) {
        if (this.speed - amount < 0) {
            console.log("tốc độ giảm quá tôc độ hiện tại ");
            return null;
        }
        else {
            console.log("giảm tốc độ thành công");
            return this.speed -= amount;
        }
    }
    speedUp(amount) {
        console.log("tăng tốc độ thành công");
        return this.speed += amount;
    }
    showSpeed() {
        console.log(`Tốc độ: ${this.speed}`);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
        this.gear = gear;
    }
    showInfo() {
        console.log(`Name: ${this.name}`);
        this.showSpeed();
        console.log(`Id: ${this.id}`);
        console.log(`Gear: ${this.gear}`);
    }
}
const bicycle = new Bicycle("struct", 99, 1, 50);
bicycle.showInfo();
