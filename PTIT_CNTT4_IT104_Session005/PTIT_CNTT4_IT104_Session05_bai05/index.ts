class Rectangle{
    constructor(
        private _width: number,
        private _heigh:number
    ) { }
    public get width(): number{
        return this._width;
    }

    public set width(value: number){
        if (value > 0) {
            this._width = value;
        } else {
            console.log("giá trị nhỏ hơn 0");
            
        }
    }
    public get height(): number{
        return this._heigh;
    }

     public set height(value: number){
        if (value > 0) {
            this._width = value;
        } else {
            console.log("giá trị nhỏ hơn 0");
            
        }
    }

    public get area(): number{
        return 2 * (this._width + this._heigh);
    }
    public get perimeter(): number{
        return  this._width * this._heigh;
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