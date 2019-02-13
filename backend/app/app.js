const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const staticDirUrl = './backend/static';

app.use(cookieParser());
app.use(express.static(staticDirUrl));

app.get('/api/', function (req, res) {
    res.json({test: 'HelloWorld!!!'});
});

app.get('/*', function (req, res) {
	res.sendfile('index.html', {root: staticDirUrl});
});

module.exports = app;

