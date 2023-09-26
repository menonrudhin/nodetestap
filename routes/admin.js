const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.urlencoded({extended:false})); // works only with "use"

router.get('/create-notes', (req, res, next) => {
	console.log('/admin/create-notes middleware');
	res.send('<form action="/admin/view-note" method="POST" ><input type="text" name="username"><button type="submit">Create</button></input></form>');
});

router.post('/view-note',(req, res, next) => {
	console.log('/admin/view-note middleware');
	const userName = req.body.username;
	console.log(userName);
	res.send('<h1>Note Created : ' + userName + '</h1>');
});

router.get('/app-ver', (req, res, next) => {
    res.send('<h3>v0.0.1</h3>');
});

module.exports = router;