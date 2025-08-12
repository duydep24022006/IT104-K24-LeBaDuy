abstract class Animal{
    constructor(
        public name:string
    ) { } 
    public abstract makeNoise(): void;
    public abstract printName(): void;
}

class Cat extends Animal{
   public makeNoise(): void {
       console.log("meo meo");
   }
    public printName(): void {
        console.log(`Name:${this.name}`);

    }
}
class Dog extends Animal{
   public makeNoise(): void {
       console.log("gâu gâu");
   }
    public printName(): void {
        console.log(`Name:${this.name}`);
    }
}

const dog = new Dog("cho cỏ");
dog.printName();
dog.makeNoise();

const cat = new Cat("mèo rừng châu phi");

cat.printName();
cat.makeNoise();
