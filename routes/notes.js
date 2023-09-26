const express = require('express');

const router = express.Router();

router.get('/notes', (req, res, next) => {
    res.send('<h2>Hello User</h2>');
});

module.exports = router;