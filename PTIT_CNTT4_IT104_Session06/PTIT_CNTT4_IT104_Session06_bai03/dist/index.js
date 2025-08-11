"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    ;
    move() {
        console.log(`${this.name} có thể ăn đc`);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} says: gâu gâu!`);
    }
}
class Crocodile extends Animal {
    makeSound() {
        console.log(`${this.name} says: sấu sấu!`);
    }
}
const dog = new Dog("nhung");
dog.makeSound();
dog.move();
const crocodile = new Crocodile("ánh");
crocodile.makeSound();
crocodile.move();
