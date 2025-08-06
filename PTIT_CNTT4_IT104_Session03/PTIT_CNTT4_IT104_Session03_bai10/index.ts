const validateLengthMax = (str: string): string => {
    const arr: string[] = str.split(" ");
    let strLength: string = "";
    let newStr: string = "";
    for (const str of arr) {
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
}

console.log(validateLengthMax("hello world apple banana orange pumpkin cucumber"));

