const express = require('express');
const app = express();
const cores = require('cors');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');
const router = require('./router')

app.use(cores());
app.use(express.json());


const uri = 'uri';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MpongoDB");
    } catch (error) {
        console.log('MongoDB Error', error);
    }
}

connect()



const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`)
});


app.use('/api', router);
