function isEven<D extends number>(arr: D[]): D | undefined {
  return arr.find((item) => item % 2 == 0);
}
console.log(isEven([1, 3, 5])); 
console.log(isEven([1, 4, 5])); 