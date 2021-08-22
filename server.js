//192.168.68.110
const http= require('http');

const hostname = '192.168.68.110';
const port = 8081;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });