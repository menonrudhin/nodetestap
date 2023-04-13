const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));

app.use('/create-user', (req, res, next) => {
	console.log('/create-user middleware');
	res.send('<form action="/users" method="POST" ><input type="text" name="title"><button type="submit">Create</button></input></form>');
});

app.use('/users',(req, res, next) => {
	console.log('/users middleware');
	const userName = req.body;
	console.log(userName);
	res.send('<h1>' + userName.toString() + '</h1>');
});

app.use('/', (req, res, next) => {
	console.log('/ middleware');
	res.send('<h1>Root Page</h1>');
});

const server = http.createServer(app);

server.listen(3000);
