const axios = require('axios');
const jsonData = require('./env.json');
const fs = require('fs')

//const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('Get list all users', async () => {
  const response = await axios.get(`${jsonData.BASE_URL}/users`);
  expect(response.status).toBe(200);
  
  console.log(response.status);
  for(let i = 0; i < response.data.length; i++){
    expect(response.data[i].id).toBeDefined();
    expect(response.data[i].name).toBeDefined();
    expect(response.data[i].email).toBeDefined();
    expect(response.data[i].address).toBeDefined();
    expect(response.data[i].phone).toBeDefined();
    expect(response.data[i].website).toBeDefined();
    expect(response.data[i].company).toBeDefined();
    console.log(`Get users - ${response.status}, ${JSON.stringify(response.data[i], null, 2)}`);
  }
    console.log(response.data[1].phone);
   let phone_value = response.data[1].phone;
    jsonData.phone = phone_value;
    fs.writeFileSync('env.json', JSON.stringify(jsonData))
});


test('Get user by ID', async () => {
  const userId = 3;
  const response = await axios.get(`${jsonData.BASE_URL}/users/${userId}`);
  expect(response.status).toBe(200);
  expect(response.data.id).toBe(userId);
  expect(response.data.name).toBeDefined();
    expect(response.data.email).toBeDefined();
    expect(response.data.address).toBeDefined();
    expect(response.data.phone).toBeDefined();
    expect(response.data.website).toBeDefined();
    expect(response.data.company).toBeDefined();
    console.log(`Get users - ${response.status}, ${JSON.stringify(response.data, null, 2)}`);
});


test ('Create new user', async () => {
    const newUser = await axios.post(`${jsonData.BASE_URL}/users`, {
        name: 'Yana Graham',
        username: 'red_fox',
        email: 'redfox@test.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'New York',
          zipcode: '92998-3874',
          geo: { lat: '-37.3159', lng: '81.1496' }
        },
        phone: '1-770-736-8031 x56442',
        website: 'somewebsite.org',
        company: {
          name: 'Sweet Fox',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets'
        }
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      }
);
    expect(newUser.status).toBe(201);
    expect(newUser.data.id).toBeDefined();``
    expect(newUser.data.name).toBe('Yana Graham');
    expect(newUser.data.username).toBe('red_fox');
    expect(newUser.data.email).toBeDefined();
    expect(newUser.data.address).toBeDefined();
    expect(newUser.data.phone).toBeDefined();
    expect(newUser.data.website).toBeDefined();
    expect(newUser.data.company).toBeDefined();
    console.log(`Create new user - ${newUser.status},
      ${JSON.stringify(newUser.data, null, 2)}`
    );
})