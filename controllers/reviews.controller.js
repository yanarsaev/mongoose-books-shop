const ReviewModel = require("../models/Review.model")

module.exports.reviewController = {
    addReview: (req, res) => {
        const { text, author, book } = req.body
        ReviewModel.create({
            text,
            author,
            book
        }).then(() => res.json('Рецензия добавлена'))
    },

    deleteReview: (req, res) => {
        ReviewModel.findByIdAndDelete(req.params.id)
        .then(() => res.json('Рецензия удалена'))
    },

    getReviews: (req, res) => {
        ReviewModel.find(req.query.book ? {book: req.query.book} : null).populate('book')
        .then((reviews) => res.json(reviews))
    }
}