// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом - <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом - <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних


function SendRequestTodo(url1) {
    return fetch(url1)
    .then(response => response.json())
    .then(todo => {
      return todo;
    })
}

function SendRequestUser(url2) {
    return fetch(url2)
    .then(response => response.json())
    .then(user => {
      return user;
    })
}

Promise.all([SendRequestTodo('https://jsonplaceholder.typicode.com/todos/1'), SendRequestUser('https://jsonplaceholder.typicode.com/users/1')])
.then(results => {
    console.log('Results from Promise.all:', results);
})
.catch(error => {
    console.error('Error in Promise.all:', error);
});

Promise.race([SendRequestTodo('https://jsonplaceholder.typicode.com/todos/1'), SendRequestUser('https://jsonplaceholder.typicode.com/users/1')])
.then(result => {
    console.log('Result from Promise.race:', result);
})
.catch(error => {
    console.error('Error in Promise.race:', error);
});

