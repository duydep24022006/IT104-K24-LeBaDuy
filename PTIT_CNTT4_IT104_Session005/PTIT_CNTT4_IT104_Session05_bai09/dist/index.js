"use strict";
class Book {
    constructor(_id, _title, _author, _year) {
        this._id = _id;
        this._title = _title;
        this._author = _author;
        this._year = _year;
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
    get year() {
        return this._year;
    }
    set year(n) {
        if (n) {
            this._year = n;
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
            console.log(`${book.id}. ${book.title} - ${book.author}`);
        });
    }
    deleteBookById(id) {
        const index = this.books.findIndex(b => b.id === id);
        if (!index) {
            console.log("không tim thấy sách ");
        }
        else {
            this.books.splice(index, 1);
            console.log(`Đã xoá sách có id = ${id}`);
        }
    }
    updateBookById(id, newTitle, newAuthor, newYear) {
        const bookId = this.books.find(b => b.id === id);
        if (!bookId) {
            console.log("không tim thấy sách ");
        }
        else {
            bookId.title = newTitle;
            bookId.author = newAuthor;
            bookId.year = newYear;
            console.log(`Đã cập nhật sách có id = ${id}`);
        }
    }
}
const book1 = new Book(1, "Clean Code", "Robert C. Martin", 2000);
const book2 = new Book(2, "Refactoring", "Martin Fowler", 2000);
const book3 = new Book(3, "You Don't Know JS", "Kyle Simpson", 2000);
const book4 = new Book(4, "The Pragmatic Programmer", "Andrew Hunt", 2000);
const book5 = new Book(5, "Design Patterns", "Erich Gamma", 2000);
const library = new Library();
library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);
library.addBook(book5);
console.log(" Danh sách ban đầu:");
library.listBooks();
library.deleteBookById(3);
console.log("\n Sau khi xoá sách id=3:");
library.listBooks();
library.updateBookById(2, "Refactoring (2nd Edition)", "Martin Fowler", 2018);
console.log("\nSau khi cập nhật sách id=2:");
library.listBooks();
