"use strict";
class Vehicle {
    constructor(speed) {
        this.speed = speed;
    }
    ;
    speedUp(value) {
        this.speed += value;
        console.log(`tốc độ hiện tại:${this.speed}`);
    }
    stop() {
        this.speed = 0;
        console.log(`tốc độ hiện tại:${this.speed}`);
    }
    slowDown(value) {
        if (this.speed - value > 0) {
            this.speed -= value;
            console.log(`tốc độ hiện tại:${this.speed}`);
        }
        else {
            console.log("tốc độ đã bằng 0 khoogn thể giảm thêm");
        }
    }
}
const myCar = new Vehicle(50);
myCar.speedUp(20);
myCar.speedUp(5);
myCar.slowDown(10);
myCar.slowDown(20);
myCar.speedUp(30);
myCar.stop();
