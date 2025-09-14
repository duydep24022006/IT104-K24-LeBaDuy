function calculate(a, b, callback) {
    const result = a + b;
    callback(result);
}
function callback(number) {
    console.log("Tổng: "+number);
}
calculate(3, 4, callback);