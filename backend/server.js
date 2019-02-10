const app = require('./app/app');
const http = require('http');

const server = http.createServer(app);

const port = 3000;
server.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});