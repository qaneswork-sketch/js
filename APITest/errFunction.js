const axios = require('axios');

async function sendUrl(url) {
  try {
    const body = await axios.get(url);
    return body.status;
  } catch (error) {
    console.error("Error occurred while sending request to URL:", url);
    return error.response ? error.response.status : error.message;
  }
}

module.exports = {sendUrl};