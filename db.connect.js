const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/';
const initialzeDatabase = async() => {
    try{
        const connection = await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        if(connection){
            console.log('connected successfully.')
        }
    }catch(error){
        console.log('unable to connect, connection failed', error)
    }
}

module.exports = {initialzeDatabase};