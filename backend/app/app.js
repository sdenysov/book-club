const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const app = express();

app.use(cookieParser());
app.use(express.static('./static'));

app.get('/api/', function (req, res) {
    res.json({test: 'HelloWorld!!!'});
});

app.get('/*', function (req, res) {
    console.log('__dirname:', __dirname);
    res.sendFile(path.join(process.cwd() + '/backend/static/index.html'));
});

module.exports = app;

