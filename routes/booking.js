const router = require('express').Router()
const booking = require('../controllers/booking')
const authorize = require('../middlewares/authorize')

router.get('/:flight_id', authorize(), booking.booking)

module.exports = router
