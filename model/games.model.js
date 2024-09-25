const mongoose = require('mongoose');

const gamesSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    genre: {
        type: String,
        require: true
    },
    originalPrice: {
        type: Number,
        require: true
    },
    discount: {
        type: Number,
        require: true
    },
    rating: {
        type: Number,
        require: true
    },
    productImage: {
        type: String,
        require: true
    }
},{timestamps: true})

const Games = new mongoose.model('Games', gamesSchema);
module.exports = Games;