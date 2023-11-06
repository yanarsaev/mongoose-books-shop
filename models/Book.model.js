const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'authors'
    },
    genre: {
        type: Schema.Types.ObjectId,
        ref: 'genres'
    }
})

module.exports = mongoose.model('books', bookSchema)