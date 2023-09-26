const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended:false})); // works only with "use"

router.get('/create-user', (req, res, next) => {
	console.log('/admin/create-user middleware');
	res.send('<form action="/admin/users" method="POST" ><input type="text" name="username"><button type="submit">Create</button></input></form>');
});

router.post('/users',(req, res, next) => {
	console.log('/admin/users middleware');
	const userName = req.body.username;
	console.log(userName);
	res.send('<h1>User Created : ' + userName + '</h1>');
});

router.get('/app-ver', (req, res, next) => {
    res.send('<h3>v2.0.13</h3>');
});

module.exports = router;