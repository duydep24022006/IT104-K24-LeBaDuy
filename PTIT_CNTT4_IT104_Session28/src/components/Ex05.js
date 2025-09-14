function checkCondition(boolean, callback) {
  setTimeout(() => {
    callback(boolean);
  }, 1000);
}
function callback(boolean) {
  console.log("Điều kiện trả về: " + boolean);
}
checkCondition(true, callback);
