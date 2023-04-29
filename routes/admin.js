const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended:false})); // works only with "use"

router.get('/create-user', (req, res, next) => {
	console.log('/create-user middleware');
	res.send('<form action="/users" method="POST" ><input type="text" name="username"><button type="submit">Create</button></input></form>');
});

router.post('/users',(req, res, next) => {
	console.log('/users middleware');
	const userName = req.body.username;
	console.log(userName);
	res.send('<h1>User Created : ' + userName + '</h1>');
});

router.get('/', (req, res, next) => {
	console.log('/ middleware');
	res.send('<h1>Root Page</h1>');
});


router.get('/app-ver', (req, res, next) => {
    res.send('v2.0.13');
});

module.exports = router;