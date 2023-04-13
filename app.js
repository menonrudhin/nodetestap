const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended:false})); // works only with "use"

app.get('/create-user', (req, res, next) => {
	console.log('/create-user middleware');
	res.send('<form action="/users" method="POST" ><input type="text" name="username"><button type="submit">Create</button></input></form>');
});

app.post('/users',(req, res, next) => {
	console.log('/users middleware');
	const userName = req.body.username;
	console.log(userName);
	res.send('<h1>User Created : ' + userName + '</h1>');
});

app.get('/', (req, res, next) => {
	console.log('/ middleware');
	res.send('<h1>Root Page</h1>');
});

const server = http.createServer(app);

server.listen(3000);
