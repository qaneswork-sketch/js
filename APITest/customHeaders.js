const axios = require('axios');

async function sendUrl(url, params, headers) {
  try {
    const body = await axios.get(url, {params, headers});
    return body;
  } catch (error) {
    console.error("Error occurred while sending request to URL:", url);
    return error.response ? error.response.status : error.message;
  }
}

module.exports = {sendUrl};