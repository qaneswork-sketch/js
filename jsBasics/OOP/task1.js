// У вас має бути 3 файли Book.js,EBook.js, task1.js
// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.
// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. Додайте до класу EBook нову властивість, наприклад, "формат файлу". Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo
// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. В сеттерах необхідно додати валідацію для переданих значень. Використовуйте їх для зміни та отримання значень властивостей.
// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг (серед них мають бути екземляри обох класів Book та EBook)
// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook


import { Book } from './Book.js';
import { EBook } from './EBook.js';


// Создаём экземпляры Book

const book1 = new Book(
    'The Great Gatsby',
    'F. Scott Fitzgerald',
    1925
);

const book2 = new Book(
    '1984',
    'George Orwell',
    1949
);

const book3 = new Book(
    'The Hobbit',
    'J.R.R. Tolkien',
    1937
);


// Вызываем printInfo()

book1.printInfo();
book2.printInfo();
book3.printInfo();


// Создаём EBook

const ebook1 = new EBook(
    'Harry Potter',
    'J.K. Rowling',
    1997,
    'PDF'
);

ebook1.printInfo();


// Используем getters

console.log(book1.title);
console.log(book1.author);
console.log(book1.year);

console.log(ebook1.fileFormat);


// Используем setters

book1.title = 'The Great Gatsby Updated';
book1.year = 1926;

ebook1.fileFormat = 'EPUB';


// Проверяем изменения

book1.printInfo();
ebook1.printInfo();


// Массив Book + EBook

const books = [
    book1,
    book2,
    book3,
    ebook1
];


// Находим самую старую книгу

const oldestBook = Book.getOldestBook(books);

console.log('Oldest book:');
oldestBook.printInfo();


// Создаём EBook из Book

const ebookFromBook = EBook.fromBook(
    book2,
    'EPUB'
);

console.log('EBook created from Book:');

ebookFromBook.printInfo();