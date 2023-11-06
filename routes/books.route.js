const { Router } = require('express')
const { booksController } = require('../controllers/books.controller')
const router = Router()

router.get('/books', booksController.getAllBooks)
router.get('/books/:id', booksController.getSpecificBook)
router.post('/books', booksController.addBook)
router.patch('/books/:id', booksController.updateBook)
router.delete('/books/:id', booksController.deleteBook)

module.exports = router