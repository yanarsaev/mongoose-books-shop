const mongoose = require('mongoose')
const Schema = mongoose.Schema

const genreSchema = new Schema({
    genreName: {
        type: String,
        required: true
    },
    genreDescription: String
})

module.exports = mongoose.model('genres', genreSchema)