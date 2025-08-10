"use strict";
class Book {
    constructor(_title, _author) {
        this._title = _title;
        this._author = _author;
    }
    get title() {
        return this._title;
    }
    set title(str) {
        if (str.trim().length > 0) {
            this._title = str;
        }
        else {
            console.log("Tiêu đề không được để trống");
        }
    }
    get author() {
        return this._author;
    }
    set author(str) {
        if (str.trim().length > 0) {
            this._author = str;
        }
        else {
            console.log("Tác giả không được để trống");
        }
    }
}
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    listBooks() {
        if (this.books.length === 0) {
            console.log("Thư viện chưa có sách nào.");
            return;
        }
        console.log("Danh sách sách trong thư viện:");
        this.books.forEach((book, index) => {
            console.log(`${index + 1}. ${book.title} - ${book.author}`);
        });
    }
    searchTitle(title) {
        const titleLower = title.toLowerCase();
        const book = this.books.filter(b => b.title.toLowerCase().includes(titleLower));
        if (book.length === 0) {
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
