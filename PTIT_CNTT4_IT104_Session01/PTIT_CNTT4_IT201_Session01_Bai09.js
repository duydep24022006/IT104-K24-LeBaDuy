const listNumbers1 = [1, 2, 3, 5, 9];
const listNumbers2 = [4, 6, 7, 8];

const arrNumbers = [...listNumbers1, ...listNumbers2];
console.log(arrNumbers.sort((a, b) => a - b));
// [1, 2, 3, 4, 5, 6, 7, 8, 9]