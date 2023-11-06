const AuthorModel = require("../models/Author.model")

module.exports.authorsController = {
    addAuthor: (req, res) => {
        const { authorName, authorDescription } = req.body
        AuthorModel.create({
            authorName,
            authorDescription
        }).then(() => res.json('Автор добавлен'))
    },

    getAuthors: (req, res) => {
        AuthorModel.find({})
        .then((authors) => res.json(authors))
    }
}