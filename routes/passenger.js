const express = require('express');
const router = express.Router();

// Controllers
const bookingController = require('../controllers/booking');


router.get('/', bookingController.getBookings);
router.get('/update-booking', bookingController.updateBooking);


module.exports = router;