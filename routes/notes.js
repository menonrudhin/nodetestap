const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('../util/path');

const router = express.Router();
router.use(bodyParser.urlencoded({extended:false})); // works only with "use"

router.get('/notes', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'notes.html'));
});

router.get('/create-notes', (req, res, next) => {
	console.log('/create-notes middleware');
    res.sendFile(path.join(rootDir, 'views', 'add-notes.html'));
	//res.send('<form action="/view-note" method="POST" ><input type="text" name="username"><button type="submit">Create</button></input></form>');
});

router.post('/view-note',(req, res, next) => {
	console.log('/view-note middleware');
	const notes = req.body.notes;
	console.log(notes);
	res.send('<h1>Note Created : ' + notes + '</h1>');
});

module.exports = router;