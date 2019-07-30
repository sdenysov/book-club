const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const staticDirUrl = './backend/static';

app.use(cookieParser());
app.use(express.static(staticDirUrl));

app.get('/api/books/', function (req, res) {
    const error = true;
    if (error) {
        res.status(500).send("Sorry! Server error");
    } else {
        res.json([
            {
                id: 1,
                title: '[owner 3] Java. Kompendium programisty. Wydanie X',
                description: 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
                author: 'Herbert Schildt',
                rating: 0,
                owner: 3
            },
            {
                id: 2,
                title: '[owner 3] Java. Kompendium programisty. Wydanie X',
                description: 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
                author: 'Herbert Schildt',
                rating: 0,
                owner: 3
            },
            {
                id: 3,
                title: '[owner 3] Java. Kompendium programisty. Wydanie X',
                description: 'Java. Kompendium programisty. Wydanie X. Cudowna książka.',
                author: 'Herbert Schildt',
                rating: 0,
                owner: 3
            }
        ]);
    }
});

app.get('/*', function (req, res) {
    res.sendfile('index.html', {root: staticDirUrl});
});

module.exports = app;

