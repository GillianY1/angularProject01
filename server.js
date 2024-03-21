const http = require('http');

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Gina\n');
}).listen( process.env.PORT || 3000, 'localhost');

console.log('Server running at http://localhost:3000/');
