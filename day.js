const http = require('http'); 
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hi World\n');
}).listen(8000, 'localhost');



