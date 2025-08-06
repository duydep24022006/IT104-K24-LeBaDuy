const number: number = 2;
const string: string = "2";

//number==string khi mà so sánh lỏng lẻo như này thì bên js vẫn nhận là nó đúng và so sánh như thường nhưng mà bên ts nó lại báo bug vì ko cần biết vì khi khai báo nó đã có kiểu dữ liệu mặc định là khác nhau rồi nên nó ko  thể so sánh đc 
//number===string đây là so sánh chat thì nó có cả so sánh cùng lúc là kiểu dữ liệu và giá trị của nó nên là cả bên js và ts điều trả về giá trị cuois cùng là gioogns nhau 