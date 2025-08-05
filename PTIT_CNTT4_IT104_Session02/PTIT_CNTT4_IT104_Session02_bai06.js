const checkEndString = (str1, str2) => {
    return str1.endsWith(str2);
};

console.log(checkEndString("Hello, World!", "Hello"));//false
console.log(checkEndString("Hi there!", "there!"));//true
