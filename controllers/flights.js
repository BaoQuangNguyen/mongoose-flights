const Flight = require('../models/flight');
const express = require('express');
const router = express.Router();


function newFlight(req, res) {
    res.render('flights/new', { errorMsg: ''});
}

async function create(req, res) {
    // Remove any empty values from the request body
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      // Create a new flight using the Flight model and request body data
      await Flight.create(req.body);
      res.redirect('/flights');
    }
    catch (err) {
      res.render('flights/new', { errorMsg: err.message });
    }
  }

async function index(req, res){
    const flightAll = await Flight.find({})
    res.render('flights/index', {
        flights: flightAll,
    })
}

module.exports = {
    new: newFlight,
    create,
    index
}