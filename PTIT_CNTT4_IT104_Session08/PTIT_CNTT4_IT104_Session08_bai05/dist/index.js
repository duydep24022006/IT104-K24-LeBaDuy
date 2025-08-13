"use strict";
function isEven(arr) {
    return arr.find((item) => item % 2 == 0);
}
console.log(isEven([1, 3, 5]));
console.log(isEven([1, 4, 5]));
