const http = require('http');

const express = require('express');

const app = express();

// Middleware 1
app.use((req, res, next) => {
	console.log('Follow the white rabbit !');
	next(); // allows the next middleware to be executed
});

// Middleware 2
app.use((req, res, next) => {
	console.log('Run Neo...');
	next();
});

// Middleware 3
app.use((req, res, next) => {
	console.log('Red / Blue Pill ?');
	next();
});

const server = http.createServer(app);

server.listen(3000);
