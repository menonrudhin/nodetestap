const http = require('http');

const express = require('express');

const app = express();

// Middleware 1
app.use('/', (req, res, next) => {
	console.log('/ always run middleware');
	next(); // call the next middleware which matches the url requested
});

// Middleware 2
app.use('/users',(req, res, next) => {
	console.log('/users middleware');
	res.send('<h1>User list here</h1>');
});

app.use('/', (req, res, next) => {
	console.log('/ middleware');
	res.send('<h1>Root Page</h1>');
});

const server = http.createServer(app);

server.listen(3000);
