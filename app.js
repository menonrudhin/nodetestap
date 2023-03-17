const http = require('http');
const port = process.env.port || 3000;
const server = http.createServer((req, res)=> {
	res.setHeader('Content-Type','text/html');
	res.write('<html>');
	res.write('<head><title>My Node App</title></head>');
	res.write('<body><p>Here We Go Again!</p></body>');
	res.write('</html>');
	res.end();
});

server.listen(port);
