const http = require('http');
const fs = require('fs');
const _hostname = '127.0.0.1';
const _port = 3000;

//basic webserver
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    var _html = fs.readFileSync('./public/index.html');
    res.write(_html);
    res.end();
});

server.listen(_port, _hostname, () => {
    console.log(`🌏Server running at http://${_hostname}:${_port}/`);
});