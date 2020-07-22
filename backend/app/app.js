const express = require('express');
const multer = require('multer');
const pathProperties = require('./config/path.properties');

const app = express();
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, pathProperties.UPLOAD);
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '_' + file.originalname);
    }
});

const upload = multer({storage: storage});

app.use(express.static(pathProperties.STATIC));

app.post('/api/books/upload', upload.single('file'), function (req, res) {
    console.log(req.file);
    res.end('OK');
});

app.get('/*', function (req, res) {
    res.sendfile('index.html', {root: pathProperties.STATIC});
});

module.exports = app;

