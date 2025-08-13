function flatten<D extends number | string>(arr: any[]): D[] {
  let result: D[] = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result = result.concat(flatten<D>(item));
    } else {
      result.push(item);
    }
  });
  return result;
}
console.log(
  flatten([
    [1, 2],
    [3, 4],
    [5, 6],
  ])
);
console.log(flatten([["apple", "banana"], ["cherry"], ["date", "elderberry"]]));
