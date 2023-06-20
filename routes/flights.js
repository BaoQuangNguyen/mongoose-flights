var express = require('express');
var router = express.Router();

// create controller module
const flightCtrl = require('../controllers/flights');
const flight = require('../models/flight');

// Get route for /flights/new
router.get('/new', flightCtrl.new);

// Post route for /flights
router.post('/', flightCtrl.create);

// Get route for /flights index
router.get('/', flightCtrl.index);

module.exports = router;
