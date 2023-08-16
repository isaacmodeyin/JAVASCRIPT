var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<html><body><p>This is a simple server.</p></body></html>');
    response.end();
});

server.listen(8080);
console.log('Server is listening on port 8080');

