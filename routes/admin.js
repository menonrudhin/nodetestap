const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

const notes = [];

router.use(bodyParser.urlencoded({extended:false})); // works only with "use"

router.get('/app-ver', (req, res, next) => {
    res.send('<h3>v0.0.1</h3>');
});

exports.routes = router;
exports.notes = notes;