abstract class Job{
    constructor(protected type: string) { };
    public printType():string
    {
        return this.type;
    }
    public abstract calculateSalary(): number;
}

class PartimeJob extends Job{
    constructor(type: string, private workingHour: number) {
        super(type);
    }
    public calculateSalary(): number{
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job{
    constructor(type: string) {
        super(type);
    }
    public calculateSalary(): number{
        return 10000000;
    }
}

const partimeJob = new PartimeJob("dev",98);
const fulltimeJob = new FulltimeJob("hack");

console.log(`Tên công việc:${partimeJob.printType()},Lương :${partimeJob.calculateSalary()} VND`);
console.log(`Tên công việc:${fulltimeJob.printType()},Lương :${fulltimeJob.calculateSalary()} VND`);
