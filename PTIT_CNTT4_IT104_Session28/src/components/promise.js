function getDataFromAPI1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("lấy dữ liệu từ trân API1 thành công");
      resolve();
    }, 1000);
  });
}
function getDataFromAPI2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("lấy dữ liệu từ trân API2 thành công");
      resolve();
    }, 1000);
  });
}
function getDataFromAPI3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("lấy dữ liệu từ trân API3 thành công");
      resolve();
    }, 1000);
  });
}

function runAllTask() {
  getDataFromAPI1()
    .then(() => {
      getDataFromAPI2();
    })
    .then(() => {
      getDataFromAPI3();
    })
    .then(() => console.log("tất cả HT"))

    .catch((error) => {
      console.log("lỗi", error);
    });
}
runAllTask();
