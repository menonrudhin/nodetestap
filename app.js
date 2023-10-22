const http = require('http');
const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/notes');

const app = express();

app.get('/', (req, res, next) => {
	console.log('/ middleware');
	res.send('<h1>Welcome to Q-Notes <i>v0.4</i></h1>');
});

app.use(shopRoutes); // order matters if both have common routes
app.use('/admin', adminRoutes);
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views', 'pg-not-found.html'));

});

const server = http.createServer(app);

server.listen(3000);
