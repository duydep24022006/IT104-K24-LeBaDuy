let userName: string ="duy";
let age: number = 19;
let job: string = "dev";

const renderUser = (userName:string,age:number,job:string) => {
    console.log(`user name:${userName}
        age:${age}
        job:${job}`);
    
}
renderUser(userName, age, job);