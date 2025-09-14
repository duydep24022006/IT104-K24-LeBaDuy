const numbers = [1, 2, 3, 4, 5, 6];

function myMap(arr, callback) {
  callback(arr.map((item) => item * 2));
}
function callback(arr) {
  console.log(arr);
}
myMap(numbers, callback);
