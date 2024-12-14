const app = require('./app');
const port = 3001;
const host = 'localhost';
const mongoose = require('mongoose');


const uri = 'mongodb+srv://kasun3865:Kasun%401234@cluster0.ygje9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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