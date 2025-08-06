"use strict";
const removeValidate = (str) => {
    let newStr = "";
    for (const char of str) {
        if (!newStr.includes(char)) {
            newStr += char;
        }
    }
    return newStr;
};
console.log(removeValidate("banana"));
