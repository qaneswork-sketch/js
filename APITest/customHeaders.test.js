const {sendUrl} = require('./customHeaders.js');
const jsonData = require('./env.json');

test('Get user with ID = 2', async () => {
    const params = { id: 2 };
    const headers = {'Custom-Header': 'TestValue'};
    const resp = await sendUrl(`${jsonData.BASE_URL}/users`, params, headers);
    console.log("Status:", resp.status);
    
    if (resp.status == 200) {
        expect(resp.status).toBe(200);

        const user = resp.data[0]; //Берем первый объект из массива

        expect(user.id).toBeDefined();
        expect(user.name).toBeDefined();
        expect(user.email).toBeDefined();

        console.log('Response headers:', resp.config.headers, user);

    } else {
        expect(resp).toBe(404);
    }
    
});