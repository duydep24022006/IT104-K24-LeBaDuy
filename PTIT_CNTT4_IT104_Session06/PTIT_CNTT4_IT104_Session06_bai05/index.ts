interface changeSpeed{
    speedUp(value:number): void;
    slowDown(value:number):void;
    stop(): void;
}
class Vehicle implements changeSpeed{
    constructor(private speed: number) { };
    speedUp(value:number): void {
        this.speed+=value;
        console.log(`tốc độ hiện tại:${this.speed}`);
        
    }
    stop(): void {
        this.speed = 0;
        console.log(`tốc độ hiện tại:${this.speed}`);
    }
    slowDown(value:number): void {
        if (this.speed-value > 0) {
            this.speed-=value;
            console.log(`tốc độ hiện tại:${this.speed}`);
        } else {
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

