function findElement<D extends number>(arr: D[], value: D): D | undefined {
  return arr.find((item) => item == value);
}
console.log(findElement([1, 3, 5],2));
console.log(findElement([1, 4, 5],4));
