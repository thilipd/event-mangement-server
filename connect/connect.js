const mongoose = require('mongoose');

const url = 'mongodb+srv://thilip:GSUVbjuKRbe1ktDV@cluster0.088kje6.mongodb.net/?retryWrites=true&w=majority';


mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const dbConfig = mongoose.connection;

dbConfig.on('error', () => console.log('Mongo not connected'));

dbConfig.on('connected', () => console.log('Mongo connected'));


module.exports = mongoose;