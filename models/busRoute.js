

const mongoose = require('mongoose');

const busStopSchema = new mongoose.Schema({
  stopName: {
    type: String,
    required: true
  },
  stopLocation: {
    type: {
      type: String,
      default: "Point"
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
});

const busRouteSchema = new mongoose.Schema({
  routeNumber: {
    type: Number,
    required: true
  },
  stops: [busStopSchema]
});

// Create a Mongoose model based on the schema
const BusRoute = mongoose.model('places', busRouteSchema);

module.exports = BusRoute;
