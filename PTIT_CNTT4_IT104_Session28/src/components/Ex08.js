const numbers = [1, 2, 2, 3, 4, 5, 6];
function myFilter(arr, number, callback) {
  callback(arr.filter((n) => n === number));
}

function callback(arr) {
  console.log(arr);
}
myFilter(numbers, 2, callback);
myFilter(numbers, 10, callback);

