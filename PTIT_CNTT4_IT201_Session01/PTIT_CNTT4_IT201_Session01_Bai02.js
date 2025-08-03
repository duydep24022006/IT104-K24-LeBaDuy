const a = 5;
const arr = [1, 2, 3];
a = 24;//khong gan dc vì giá trị ban đầu nó đc gán vào giá trị vùng nhớ của giá trị đó .
arr.push(4);//khong gây ra lỗi vì nó chỉ thay đổi giá trị của mảng,mà không có thay đổi vùng nhớ 
console.log(`Giá trị của a: ${a}`);
console.log(`Giá trị của arr: ${arr}`);
