
// test.js
const http = require('http');

http.get('http://localhost:3000', (res) => {
  console.log(`Status Code: ${res.statusCode}`);
}).on('error', (err) => {
  console.error('Test failed:', err.message);
});
