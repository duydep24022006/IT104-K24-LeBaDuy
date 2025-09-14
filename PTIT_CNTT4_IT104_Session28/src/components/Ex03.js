function processArray(arr, callback) {
    arr.map((item, index) =>
      setTimeout(() => {
        callback(item);
      }, index * 1000)
    );
}
function callback(n) {
    console.log(n);
    
}
const arr=[1,2,3,4,5,6]
processArray(arr, callback);