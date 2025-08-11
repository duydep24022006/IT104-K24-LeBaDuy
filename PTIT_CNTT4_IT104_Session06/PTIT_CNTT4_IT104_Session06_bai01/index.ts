abstract class Shape {
    constructor(protected name: string) { } 
    public getName(): string{
        return this.name;
    }
    public abstract getSize(): void;
}

class Rectangle extends Shape{
    constructor(name: string, private width: number, private height: number) {
        super(name);
    }
    public getSize(): void {
        console.log(`${this.getName()} có chiều rộng: ${this.width},chiều cao :${this.height}`);
    }
}

const rectangle = [
    new Rectangle("hinh chữ nhật A", 12, 10),
    new Rectangle("hinh chữ nhật B", 8, 10)
]
rectangle.forEach(item => {
    console.log(item.getName()); 
    item.getSize(); 
});
