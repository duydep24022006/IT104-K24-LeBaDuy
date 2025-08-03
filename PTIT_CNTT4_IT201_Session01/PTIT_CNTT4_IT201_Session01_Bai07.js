const sumArrays = (...arrays) => {
  return arrays.map((arr) => arr.reduce((total, num) => total + num, 0));
};
console.log(sumArrays([1, 2], [6, 7, 8], [12, 8]));
// Output: [3, 21, 20]