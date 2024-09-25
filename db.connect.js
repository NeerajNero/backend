const mongoose = require('mongoose');
const mongoURI = 'mongodb://nero:nero@neog-shard-00-00.ghizv.mongodb.net:27017,neog-shard-00-01.ghizv.mongodb.net:27017,neog-shard-00-02.ghizv.mongodb.net:27017/?ssl=true&replicaSet=atlas-xvxmq6-shard-0&authSource=admin&retryWrites=true&w=majority&appName=neoG';
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
