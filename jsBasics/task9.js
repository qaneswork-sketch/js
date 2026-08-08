// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)


function squad (width, height) {
    return width * height;
}
console.log(squad(5, 10));


const squad2 = function (width, height) {
    return width * height;
}
console.log(squad2(2, 30));

const squad3 = (widh, height) => widh * height;
console.log(squad3(4, 5));

