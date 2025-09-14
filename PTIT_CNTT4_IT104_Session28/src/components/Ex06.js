function task1(task) {
  setTimeout(() => {
    console.log("task 1 được thực thi");
    task();
  }, 1000);
}
function task2(task) {
  setTimeout(() => {
    console.log("task 2 được thực thi");
    task();
  }, 1500);
}

function task3() {
  setTimeout(() => {
    console.log("task 3 được thực thi!Hoàn thành");
  }, 2000);
}
function taskAll(task1, task2, task3) {
  task1(() => task2(() => task3()));
}
taskAll(task1, task2, task3);
