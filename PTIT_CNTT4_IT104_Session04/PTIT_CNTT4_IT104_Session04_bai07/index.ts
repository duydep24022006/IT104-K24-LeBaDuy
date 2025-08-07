const processInput = (input: string | number | boolean) => {
    if (typeof input === "string") {
        if (/^\d+$/.test(input)) {
            const number: number = Number(input);
            console.log(number*number);
            
        } else {
            const letters = input.match(/[a-zA-Z]/g);
            const count = letters ? letters.length : 0;
            console.log(`${count} ký tự chữ cái`);
        }
    } else if (typeof input ==="number") {
        if (input === 1) {
            console.log("đây là số nguyên tố ");
        }
        let n:number = 2;
        let flag: number = 0;
        while (n<Math.sqrt(input)) {
            if (input % n == 0) {
                flag = 1;
                break;
            }
            n++;
        }
        if (!flag) {
            console.log("đây là số nguyên tố ");
        } else {
            console.log("đây không phải là số nguyên tố ");
        }
    } else if(typeof input==="boolean"){
        input ?console.log("Giá trị là true - tiến hành xử lý") : console.log("Giá trị là false - dừng xử ");
    }
}
processInput("123");      
processInput("abc123!");  
processInput(7);           
processInput(10);         
processInput(true);        
processInput(false);