const http = require('http');
const express = require('express');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/notes');

const app = express();

app.get('/', (req, res, next) => {
	console.log('/ middleware');
	res.send('<h1>Welcome to Q-Notes</h1>');
});

app.use(shopRoutes); // order matters if both have common routes
app.use('/admin', adminRoutes);
app.use((req, res, next) => {
	res.status(404).send("<h1>Page Not Found</h1>");
});

const server = http.createServer(app);

server.listen(3000);
