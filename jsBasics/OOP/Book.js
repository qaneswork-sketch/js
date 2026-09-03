export class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // GETTERS

    get title() {
        return this._title;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    // SETTERS

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Title must be a non-empty string');
        }

        this._title = value;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Author must be a non-empty string');
        }

        this._author = value;
    }

    set year(value) {
        if (
            typeof value !== 'number' ||
            !Number.isInteger(value) ||
            value <= 0
        ) {
            throw new Error('Year must be a positive integer');
        }

        this._year = value;
    }

    printInfo() {
        console.log(
            `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`
        );
    }

    static getOldestBook(books) {
        return books.reduce((oldestBook, currentBook) => {
            return currentBook.year < oldestBook.year
                ? currentBook
                : oldestBook;
        });
    }
}