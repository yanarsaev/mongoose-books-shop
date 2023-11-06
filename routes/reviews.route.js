const { Router } = require('express')
const { reviewController } = require('../controllers/reviews.controller')
const router = Router()

router.get('/reviews', reviewController.getReviews)
router.post('/reviews', reviewController.addReview)
router.delete('/reviews/:id', reviewController.deleteReview)

module.exports = router