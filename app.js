const http = require('http');

const port = process.env.port || 3000;
const server = http.createServer((req, res)=> {
	let url = req.url;
	if(url === "/") {
		res.setHeader('Content-Type','text/html');
		res.write('<html>');
		res.write('<head><title>My Node App</title></head>');
		res.write('<body><form action="/users" method="POST"><input type="text"></input><button type="submit">Register</button></form></body>');
		res.write('</html>');
		res.end();
		return;
	} else if (url === "/users"){
		res.setHeader('Content-Type','text/html');
		res.write('<html>');
		res.write('<head><title>My Node App</title></head>');
		res.write('<body><p>Here We Go Again!</p></body>');
		res.write('</html>');
		res.end();
		return;
	}
	res.setHeader('Content-Type','text/html');
	res.write('<html>');
	res.write('<head><title>My Node App</title></head>');
	res.write('<body><input type="text"></input><button action="/users">Register</button></body>');
	res.write('</html>');
	res.end();
});

server.listen(port);
