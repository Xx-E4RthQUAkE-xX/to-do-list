const express = require('express');
let app = express();

const path = require('path');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.resolve(__dirname, '../public')));

const routes = require('./routes');
routes(app);

module.exports = app;