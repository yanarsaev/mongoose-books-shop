const GenreModel = require("../models/Genre.model")

module.exports.genresController = {
    addGenre: (req, res) => {
        const { genreName, genreDescription } = req.body
        GenreModel.create({
            genreName,
            genreDescription
        })
        .then(() => res.json('Жанр добавлен'))
    },

    deleteGenre: (req, res) => {
        GenreModel.findByIdAndDelete(req.params.id)
        .then(() => res.json('Жанр удален'))
    },

    getGenres: (req, res) => {
        GenreModel.find({})
        .then((genres) => res.json(genres))
    }
}