"use strict";
class Book {
    constructor(_id, _title, _author) {
        this._id = _id;
        this._title = _title;
        this._author = _author;
    }
    get id() {
        return this._id;
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
    editBook(id) {
        const bookId = this.books.find(b => b.id === id);
        if (!bookId) {
            console.log("không tim thấy sách ");
            return null;
        }
        return bookId;
    }
}
const book1 = new Book(1, "Clean Code", "Robert C. Martin");
const book2 = new Book(2, "Refactoring", "Martin Fowler");
const book3 = new Book(3, "You Don't Know JS", "Kyle Simpson");
const book4 = new Book(4, "The Pragmatic Programmer", "Andrew Hunt");
const book5 = new Book(5, "Design Patterns", "Erich Gamma");
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
library.listBooks();
const editTarget = library.editBook(3);
if (editTarget) {
    editTarget.title = "có cái nit";
    editTarget.author = "duy đẹp trai (Updated)";
}
console.log("sau khi chỉnh sửa");
library.listBooks();
