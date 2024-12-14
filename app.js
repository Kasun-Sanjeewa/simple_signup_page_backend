const express = require('express');
const app = express();
const cores = require('cors');


app.use(cores());

app.use(express.urlencoded({
    extended: true,
}));


app.use(express.json());

module.exports = app;