const checkParity = (n) => {
    if(isNaN(n)) {
        return `${n} not is number`;
    } 
    return n % 2 === 0 ? `${n} is an even number` : `${n} is odd`;
}
console.log(checkParity("hello"));   // hello not is number
console.log(checkParity(10));        // 10 is an even number
console.log(checkParity(7));         // 7 is an odd
