const sumEvenNumbers = (arr) => { 
    
    if (!Array.isArray(arr)) {
      console.log("Input is not an array");
        return 0;
    }
    return arr.reduce((total, num) => {
      if (typeof num === "number" && num % 2 === 0) {
        return total + num;
      }
      return total;
    }, 0);
}

const arr1 = [1, 2, 3, 4, 5, 6];

console.log(sumEvenNumbers(arr1));//12
