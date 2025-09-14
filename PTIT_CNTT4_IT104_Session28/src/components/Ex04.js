function processArray(callback) {
  let n = 0;
    setInterval(() => {
      callback(++n);
    }, 1000);
}
function callback(n) {
  console.log(n);
}
processArray("Số thứ tư:"+callback);
