const http = require('http');

const _hostname = '127.0.0.1';
const _port = 3000;


//basic webserver
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    res.write("Hello World");
    res.end();
});

server.listen(_port, _hostname, () => {
    console.log(`🌏Server running at http://${_hostname}:${_port}/`);
});

