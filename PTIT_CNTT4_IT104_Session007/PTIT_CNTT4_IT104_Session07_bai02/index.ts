class Vehicle{
    constructor(
        protected name: string,
        protected speed: number,
        protected id:number
    ) { }
    
    public slowDown(amount:number):number|null {
        if (this.speed - amount < 0) {
            console.log("tốc độ giảm quá tôc độ hiện tại ");
            
            return null;
        } else {
            console.log("giảm tốc độ thành công");
            return this.speed -= amount;
        }
    }
    public speedUp(amount: number): number {
        console.log("tăng tốc độ thành công");
        
            return this.speed += amount;
    }
    public showSpeed(): void {
        console.log(`Tốc độ: ${this.speed}`);
    }
}

class Bicycle extends Vehicle{
    constructor(
        name: string,
        speed: number,
        id: number,
        private gear:number
    ) {
        super(name, speed, id);
        this.gear = gear;
    }
    public showInfo(): void{
        console.log(`Name: ${this.name}`);
        this.showSpeed();
        console.log(`Id: ${this.id}`);
        console.log(`Gear: ${this.gear}`);
    }
}

const bicycle = new Bicycle("struct", 99, 1, 50);
bicycle.showInfo();