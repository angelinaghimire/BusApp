var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const BusRoute = require('../models/busRoute'); // Adjust the path based on your project structure

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bus Routes App' });
});

module.exports = router;
