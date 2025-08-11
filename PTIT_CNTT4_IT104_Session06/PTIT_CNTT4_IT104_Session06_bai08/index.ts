class Book {
    constructor(
        public id: number,
        public title: string,
        public author: string,
        public stock: number,
        public status: string
    ) {}
}
class Member{
    constructor(    
        public id: number,
        public name: string,
        public contact: string,
        public lendedBooks:string,
        public status:string
    ){}
}
class lendedBook{
    constructor(    
        public memberId: number,
        public bookId: number,
        public dueDate: number,
    ){}
}
class Library{
    constructor(    
      public books:Book[]=[],
      public members:Member[]=[]
    ){}
    addBook(book :Book){
        this.books.push(book);
    }
    showBook(){
        console.log(`Dach sach sach trg thu vien`);
        this.books.forEach(b=>{ 
           console.log(`ID: ${b.id}, Tiêu đề: ${b.title}, Tác giả: ${b.author}, Tồn kho: ${b.stock}, Trạng thái: ${b.status}`);
        });
    }
    

}
const library = new Library();
library.addBook(new Book(1, "xuc xich", "chất", 3, "dang co san"));
library.addBook(new Book(2, "mõm", "mới", 2, "da muon"));
library.showBook();
