const mongoose = require('mongoose')
const Schema = mongoose.Schema

const authorSchema = new Schema({
    authorName: {
        type: String,
        required: true
    },
    authorDescription: String
})

module.exports = mongoose.model('authors', authorSchema)