const express = require('express');
const app = express();
const cores = require('cors');
const controller = require('./controller')


app.use(cores());

app.use(express.urlencoded({
    extended: true,
}));


app.get('/Users', (req, res) => {
    controller.getUser(users => {
        res.send(users);
    });
});



app.use(express.json());

module.exports = app;