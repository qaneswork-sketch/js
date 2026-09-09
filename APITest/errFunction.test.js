const {sendUrl} = require('./errFunction.js');
const jsonData = require('./env.json');

test('Return 404 error for invalid URL', async () => {
    const resp = await sendUrl(jsonData.invalidURL);
    console.log("Status:", resp);
    expect(resp).toBe(404);
});