const http = require('http');
const express = require('express');
const path = require('path');

const adminRoutes = require('./routes/admin');
const noteRoutes = require('./routes/notes');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res, next) => {
	console.log('/ middleware');
	res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.use(noteRoutes); // order matters if both have common routes
app.use('/admin', adminRoutes);
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'views', 'pg-not-found.html'));
});

const server = http.createServer(app);

server.listen(3000);
