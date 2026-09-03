// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом - <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом - <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних


//Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити


async function SendRequestTodo(url1) {
    const response = await fetch(url1)
    const todo = await response.json();
    return todo;
}

async function SendRequestUser(url2) {
    const response = await fetch(url2)
    const user = await response.json();
    return user;
}

async function PromiseAll() {
    try {
        const results = await Promise.all([SendRequestTodo('https://jsonplaceholder.typicode.com/todos/1'), SendRequestUser('https://jsonplaceholder.typicode.com/users/1')]);
        console.log('Results from Promise.all:', results);
    } catch (error) {
        console.error('Error in Promise.all:', error);
    }
}


async function PromiseRace() {
    try {
        const result = await Promise.race([SendRequestTodo('https://jsonplaceholder.typicode.com/todos/1'), SendRequestUser('https://jsonplaceholder.typicode.com/users/1')]);
        console.log('Results from Promise.race:', result);
    } catch (error) {
        console.error('Error in Promise.race:', error);
    }
}

PromiseAll();
PromiseRace();