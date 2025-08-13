"use strict";
function validateLength(str) {
    const arrStr = str.split(" ");
    let strLength = "";
    for (const item of arrStr) {
        let seen = [];
        let flag = 1;
        for (const char of item) {
            if (seen.includes(char)) {
                flag = 0;
                break;
            }
            seen.push(char);
        }
        if (strLength.length < item.length && flag) {
            strLength = item;
        }
    }
    return strLength;
}
console.log(validateLength("hello world apple banana orange pumpkin cucumber"));
