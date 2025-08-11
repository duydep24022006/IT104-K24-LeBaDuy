abstract class Animal{
    constructor(protected name: string) { };
    public abstract makeSound(): void;
    public move(): void{
        console.log(`${this.name} có thể ăn đc`);
    }
}

class Dog extends Animal{
    public makeSound(): void {
        console.log(`${this.name} says: gâu gâu!`);
    }
    
}
class Crocodile extends Animal{
    public makeSound(): void {
        console.log(`${this.name} says: sấu sấu!`);
    }
}

const dog = new Dog("nhung");
dog.makeSound();
dog.move();

const crocodile = new Crocodile("ánh");

crocodile.makeSound();
crocodile.move();