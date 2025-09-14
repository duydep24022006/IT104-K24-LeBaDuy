function delayedCallback(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay);
}
function callback() {
  console.log("đã chạy");
}
delayedCallback(5, callback);