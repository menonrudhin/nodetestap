const http = require('http');
const express = require('express');

const adminRoutes = require('./routes/admin');

const app = express();

app.use(adminRoutes);

const server = http.createServer(app);

server.listen(3000);
