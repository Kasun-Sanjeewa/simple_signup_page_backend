const express = require('express');
const app = express();
const cores = require('cors');
const controller = require('./controller')


app.use(cores());

app.use(express.urlencoded({
    extended: true,
}));


app.post('/addUsers', (req, res) => {
    controller.addUser(res.body, (callback) => {
        res.send();
    });
});



app.use(express.json());

module.exports = app;