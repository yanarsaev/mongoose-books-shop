const mongoose = require('mongoose')
const Schema = mongoose.Schema

const reviewSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true  
    },
    book: {
        type: Schema.Types.ObjectId,
        ref: 'books'
    }
})

module.exports = mongoose.model('reviews', reviewSchema)