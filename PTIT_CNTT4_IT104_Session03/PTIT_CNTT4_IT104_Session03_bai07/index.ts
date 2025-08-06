const removeValidate = (str: string): string => {
    let newStr: string = "";
    for (const char of str) {
        if (!newStr.includes(char)) {
            newStr += char;
        }
    }
    return newStr;
}

console.log(removeValidate("banana"));
