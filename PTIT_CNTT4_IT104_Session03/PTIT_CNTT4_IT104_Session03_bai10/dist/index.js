"use strict";
const validateLengthMax = (str) => {
    const arr = str.split(" ");
    let strLength = "";
    let newStr = "";
    for (const str of arr) {
        newStr = "";
        for (const char of str) {
            if (!newStr.includes(char)) {
                newStr += char;
            }
        }
        if (strLength.length < newStr.length) {
            strLength = newStr;
        }
    }
    return strLength;
};
console.log(validateLengthMax("hello world apple banana orange pumpkin cucumber"));
