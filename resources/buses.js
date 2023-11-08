const mongoose = require('mongoose');
const BusRoute = require('./BusRoute'); // Import your Mongoose model

// Connect to MongoDB (replace 'mongodb://localhost:27017/yourdbname' with your MongoDB connection string)
mongoose.connect('mongodb://localhost:3000', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Create a new bus route object
const newBusRoute = new BusRoute({
  routeNumber: '123',
  stops: [
    {
      stopName: 'Stop A',
      stopLocation: {
        type: 'Point',
        coordinates: [latitude, longitude] // Replace latitude and longitude with actual coordinates
      }
    },
    {
      stopName: 'Stop B',
      stopLocation: {
        type: 'Point',
        coordinates: [latitude, longitude] // Replace latitude and longitude with actual coordinates
      }
    }
    // Add more stops as needed
  ]
});

// Save the new bus route to the database
newBusRoute.save((err, route) => {
  if (err) {
    console.error('Error inserting data:', err);
  } else {
    console.log('Bus route inserted successfully:', route);
  }
  
  // Close the MongoDB connection after inserting data
  mongoose.connection.close();
});
