"use strict";
class Book {
    constructor(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
}
class Member {
    constructor(id, name, contact, lendedBooks, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBooks = lendedBooks;
        this.status = status;
    }
}
class lendedBook {
    constructor(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
}
class Library {
    constructor(books = [], members = []) {
        this.books = books;
        this.members = members;
    }
    addBook(book) {
        this.books.push(book);
    }
    showBook() {
        console.log(`Dach sach sach trg thu vien`);
        this.books.forEach(b => {
            console.log(`ID: ${b.id}, Tiêu đề: ${b.title}, Tác giả: ${b.author}, Tồn kho: ${b.stock}, Trạng thái: ${b.status}`);
        });
    }
}
const library = new Library();
library.addBook(new Book(1, "xuc xich", "chất", 3, "dang co san"));
library.addBook(new Book(2, "mõm", "mới", 2, "da muon"));
library.showBook();
