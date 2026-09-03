// Створіть 2 класи, які будуть мати в собі методи що реалізують функції з попереднього завдання.

class ToDo {
    constructor(url){
        this.url = url;
    }
    SendRequest() {
        return fetch(this.url)
        .then(response => response.json())
        .then(data => {
          return data;
        })
    }

    FetchAndLog(text){
        this.SendRequest(this.url)
        .then(results => {
            console.log(`Results from ${text}:`, results);
        })
        .catch(error => {
            console.error(`Error in ${text}:`, error);
        });
    }
}

class User extends ToDo {
}

const toDo = new ToDo('https://jsonplaceholder.typicode.com/todos/1');
toDo.FetchAndLog('ToDO');

const user = new User('https://jsonplaceholder.typicode.com/users/1');
user.FetchAndLog('User');