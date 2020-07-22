const app = require('./app/app');
const sequelize = require('./app/models');

sequelize.authenticate()
    .then(function () {
        console.log('Connection has been established successfully.');
        const port = 3000;
        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`)
        });
    })
    .catch(function () {
        console.error('Unable to connect to the database:', error);
    });


