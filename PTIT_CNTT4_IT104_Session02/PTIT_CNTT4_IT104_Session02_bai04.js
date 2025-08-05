const checkElement = (arr,number) => {
    return arr.includes(number);
}

let arr = [1, 2, 3, 4, 5];

console.log(checkElement(arr, 3));//true
console.log(checkElement(arr, 6));//false
