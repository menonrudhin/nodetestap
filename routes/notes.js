const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const rootDir = require('../util/path');
const admin = require('./admin');
const notes = admin.notes;
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
	const note_title = req.body.note_title;
	const note_text = req.body.note_text;
	notes.push({title : note_title, text : note_text});
	console.log(note_title + ' ' + note_text);
	res.send('<h1>Note Created : ' + note_title + '</h1></br><h4>' + note_text + '</h4>');
	console.log('notes length : ' + notes.length);
});

module.exports = router;