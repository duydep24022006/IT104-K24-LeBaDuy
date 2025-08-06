"use strict";
const mathNum = (num1, num2) => {
    num1 = Number(num1);
    num2 = Number(num2);
    let num3 = 0;
    if (isNaN(num1) || isNaN(num2)) {
        return console.log("input khong hop le");
        ;
    }
    num3 = num1 + num2;
    console.log(`Tổng: ${num3}`);
    num3 = num1 - num2;
    console.log(`Hiệu: ${num3}`);
    num3 = num1 * num2;
    console.log(`Tích: ${num3}`);
    num3 = num1 / num2;
    console.log(`Thương: ${num3}`);
};
mathNum("12", 3);
mathNum("av", 3);
