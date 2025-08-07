"use strict";
let scoreArr = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let aven = scoreArr.reduce((num, sum) => sum + num, 0) / scoreArr.length;
console.log("Điểm trung bình: ", aven.toFixed(2));
