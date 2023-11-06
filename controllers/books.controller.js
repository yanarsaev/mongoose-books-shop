const BookModel = require("../models/Book.model")

module.exports.booksController = {
    addBook: (req, res) => {
        const { name, author, genre } = req.body
        BookModel.create({
            name, 
            author, 
            genre
        })
        .then(() => res.json('Книга добавлена'))
    },

    deleteBook: (req, res) => {
        BookModel.findByIdAndDelete(req.params.id)
        .then(() => res.json('Книга удалена'))
    },

    updateBook: (req, res) => {
        const { name, author, genre } = req.body
        BookModel.findByIdAndUpdate(req.params.id, {name, author, genre})
        .then(() => res.json('Книга обновлена'))
    },

    getAllBooks: (req, res) => {
        BookModel.find({}).populate('author genre')
        .then((books) => res.json(books))
    },

    getSpecificBook: (req, res) => {
        BookModel.findOne({_id: req.params.id}).populate('author genre')
        .then((book) => res.json(book))
    },

    getBookOfSameGenre: (req, res) => {
        BookModel.find(req.query.genre ? { genre: req.query.genre } : null).populate('author genre')
        .then((book) => res.json(book))
    }
}
