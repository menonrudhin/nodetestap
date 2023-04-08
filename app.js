const http = require('http');

const port = process.env.port || 3000;
const server = http.createServer((req, res)=> {
	const url = req.url;
	const method = req.method;
	if(url === "/") {
		res.write('<html>');
		res.write('<head><title>My Node App 2</title></head>');
		res.write('<body><form action="/users" method="POST"><input type="text" name="message"><button type="submit">Register</button></input></form></body>');
		res.write('</html>');
		return res.end();
	}
	if (url === '/users' && method === 'POST'){
		const body = [];
		req.on('data', (chunk) => {
			body.push(chunk);
			console.log(chunk);
		});
		req.on('end', ()=>{
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody);
		});
		res.statusCode = 302;
		res.setHeader('Location', '/');
		return res.end();
	}
	res.setHeader('Content-Type','text/html');
	res.write('<html>');
	res.write('<head><title>My Node App</title></head>');
	res.write('<body><input type="text"></input><button action="/users">Register</button></body>');
	res.write('</html>');
	res.end();
});

server.listen(port);
