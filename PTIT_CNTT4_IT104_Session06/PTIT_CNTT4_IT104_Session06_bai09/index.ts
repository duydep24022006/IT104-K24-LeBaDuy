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
    registerMember(member:Member){
        this.members.push(member)
    }
    blockMember(id:number, status: string){
        const index = this.members.findIndex(e => e.id === id);
        if(index!==-1){
            this.members[index].status = status;
        }
    }
    showMember(){
        console.log(`Danh sach thanh vien trong thu vien: `);
        this.members.forEach(e=>{
            console.log(`id: ${e.id}, name: ${e.name}, contact: ${e.contact}, lendedBook: ${e.lendedBooks}, status: ${e.status}`);            
        })
    }
}
const library = new Library();
library.addBook(new Book(1, "xuc xich", "chất", 3, "dang co san"));
library.addBook(new Book(2, "mõm", "mới", 2, "da muon"));
library.showBook();
library.registerMember(new Member(1, "t", "123", "asdf", "dang hoat dong"));
library.registerMember(new Member(2, "duy", "4123", "asdf", "dang hoat dong"));
library.showMember();
library.blockMember(1, "nghi");
library.showMember();