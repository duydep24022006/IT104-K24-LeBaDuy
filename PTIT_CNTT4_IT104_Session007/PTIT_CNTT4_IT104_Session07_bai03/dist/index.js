"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
}
class Cat extends Animal {
    makeNoise() {
        console.log("meo meo");
    }
    printName() {
        console.log(`Name:${this.name}`);
    }
}
class Dog extends Animal {
    makeNoise() {
        console.log("gâu gâu");
    }
    printName() {
        console.log(`Name:${this.name}`);
    }
}
const dog = new Dog("cho cỏ");
dog.printName();
dog.makeNoise();
const cat = new Cat("mèo rừng châu phi");
cat.printName();
cat.makeNoise();
