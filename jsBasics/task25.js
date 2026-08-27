const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        age: 25
    },
    {
        id: 2,
        name: "Jane Smith",
        email: "jane.smith@example.com",
        age: 30
    },
    {
        id: 3,
        name: "Bob Johnson",
        email: "bob.johnson@example.com",
        age: 35
    }
];

for (const {id, name, email, age} of users) {
    console.log(`ID: ${id}, Name: ${name}, Email: ${email}, Age: ${age}`);
}