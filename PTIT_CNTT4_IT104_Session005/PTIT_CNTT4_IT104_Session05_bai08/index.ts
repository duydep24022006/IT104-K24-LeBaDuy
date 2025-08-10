class Book {
    constructor(
        private _title: string,
        private _author: string
    ) { }

    public get title(): string {
        return this._title;
    }

    public set title(str: string) {
        if (str.trim().length > 0) {
            this._title = str;
        } else {
            console.log("Tiêu đề không được để trống");
        }
    }

    public get author(): string {
        return this._author;
    }

    public set author(str: string) {
        if (str.trim().length > 0) {
            this._author = str;
        } else {
            console.log("Tác giả không được để trống");
        }
    }
}

class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public listBooks(): void {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} - ${book.author}`);
        });
  }
  public searchTitle(title: string): Book[]{
    const titleLower = title.toLowerCase();
    const book = this.books.filter(b => b.title.toLowerCase().includes(titleLower));
    if (book.length===0) {
      console.log("không tim thây");
    }
    return book;
  }
}

const book1 = new Book("Clean Code", "Robert C. Martin");
const book2 = new Book("Refactoring", "Martin Fowler");
const book3 = new Book("You Don't Know JS", "Kyle Simpson");
const book4 = new Book("The Pragmatic Programmer", "Andrew Hunt");
const book5 = new Book("Design Patterns", "Erich Gamma");


const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);

library.listBooks();


const searchBook = library.searchTitle("Clean");

console.log("kết quả tìm kiếm");

searchBook.forEach((book, index) => {
    console.log(`${index + 1}. ${book.title} - ${book.author}`);
});


