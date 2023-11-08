
var express = require('express');
var router = express.Router();
const BusRoute = require('../models/busRoute'); // Adjust the path based on your project structure

// var books = require('../resources/books');

router.get('/', async function(req, res, next) {
  try {
    const busRoutes = await BusRoute.find(); // Retrieve all bus routes from the database
    res.render('index', { title: 'Bus Routes App', busRoutes:busRoutes });// Send the bus routes as JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
 
});

router.get('/busRoutes', async function(req, res, next) {
  try {
    const busRoutes = await BusRoute.find(); // Retrieve all bus routes from the database
    res.json(busRoutes); // Send the bus routes as JSON response
  } catch (error) {
    res.status(500).json({ error: error.message }); // Handle errors
  }
});

module.exports=router;
