"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    ;
    printType() {
        return this.type;
    }
}
class PartimeJob extends Job {
    constructor(type, workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type) {
        super(type);
    }
    calculateSalary() {
        return 10000000;
    }
}
const partimeJob = new PartimeJob("dev", 98);
const fulltimeJob = new FulltimeJob("hack");
console.log(`Tên công việc:${partimeJob.printType()},Lương :${partimeJob.calculateSalary()} VND`);
console.log(`Tên công việc:${fulltimeJob.printType()},Lương :${fulltimeJob.calculateSalary()} VND`);
