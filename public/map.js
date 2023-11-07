const userIcon = L.divIcon({
  className: 'custom-user-icon',
  iconSize: [32, 32], // Adjust the size as needed
  html: '<div class="circle"></div>',
});

var map = L.map('map');
let userMarker, startMarker, destinationMarker;

map.setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

navigator.geolocation.watchPosition(success, error);

function success(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const accuracy = pos.coords.accuracy;

  // Remove existing markers if any
  if (userMarker) {
    map.removeLayer(userMarker);
  }

  // Add a marker for the user's location
  userMarker = L.marker([lat, lng], { icon: userIcon }).addTo(map);




  // Fit the map to the bounds of the markers
  fitMapToMarkers();
}

function error(err) {
  if (err.code === 1) {
    alert("Please allow geolocation access");
  } else {
    alert("Cannot get current location");
  }
}

function plotStartLocation() {
  const locationName = document.getElementById('location').value;
  plotLocation(locationName, 'start');
}

function plotDestination() {
  const locationName = document.getElementById('destination').value;
  plotLocation(locationName, 'destination');
}

function plotLocation(locationName, type) {
  // Use Nominatim geocoding service to get coordinates from location name
  const geocodeURL = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}`;

  fetch(geocodeURL)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        const lat = data[0].lat;
        const lon = data[0].lon;

        // Remove existing markers based on type
        if (type === 'start' && startMarker) {
          map.removeLayer(startMarker);
        } else if (type === 'destination' && destinationMarker) {
          map.removeLayer(destinationMarker);
        }

        // Add markers based on type
        if (type === 'start') {
          startMarker = L.marker([lat, lon]).addTo(map);
        } else if (type === 'destination') {
          destinationMarker = L.marker([lat, lon]).addTo(map);
        }

        // Fit the map to the bounds of the markers
        fitMapToMarkers();
      } else {
        alert('Location not found. Please enter a valid location.');
      }
    })
    .catch(error => console.error('Error geocoding location:', error));
}

function fitMapToMarkers() {
  // Create a LatLngBounds object to include all markers
  const bounds = L.latLngBounds(userMarker.getLatLng(), startMarker ? startMarker.getLatLng() : userMarker.getLatLng(), destinationMarker ? destinationMarker.getLatLng() : userMarker.getLatLng());

  // Fit the map to the bounds of all markers
  map.fitBounds(bounds);
}
