const numbers = [1, 2, 3, 4, 5, 6];

function myForEach(arr, callback) {
    arr.forEach((element ,index,arr)=> {
        callback(index, element, arr);
    });
}
function callback(index,number,arr) {
    console.log(`Vị trí ${index} | Phần tử: ${number} |Mảng :${arr}`);
}
myForEach(numbers, callback);
