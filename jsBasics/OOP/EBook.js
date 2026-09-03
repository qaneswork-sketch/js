import { Book } from './Book.js';

export class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);

        this.fileFormat = fileFormat;
    }

    // GETTER

    get fileFormat() {
        return this._fileFormat;
    }

    // SETTER

    set fileFormat(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('File format must be a non-empty string');
        }

        this._fileFormat = value;
    }

    // Переопределяем метод родительского класса

    printInfo() {
        console.log(
            `Title: ${this.title}, ` +
            `Author: ${this.author}, ` +
            `Year: ${this.year}, ` +
            `Format: ${this.fileFormat}`
        );
    }

    // STATIC METHOD

    static fromBook(book, fileFormat) {
        return new EBook(
            book.title,
            book.author,
            book.year,
            fileFormat
        );
    }
}