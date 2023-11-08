const userIcon = L.divIcon({
  className: 'custom-user-icon',
  iconSize: [25, 25],
  html: '<div class="circle"></div>',
});

var map = L.map('map');
let userMarker, startMarker, destinationMarker;

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

navigator.geolocation.watchPosition(success, error);

function success(pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;
  const accuracy = pos.coords.accuracy;

  if (!userMarker) {
    userMarker = L.marker([lat, lng], { icon: userIcon }).addTo(map);
  } else {
    userMarker.setLatLng([lat, lng]);
  }

  map.setView([lat, lng], 20);

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
  const geocodeURL = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(locationName)}`;

  fetch(geocodeURL)
    .then(response => response.json())
    .then(data => {
      if (data.length > 0) {
        const lat = data[0].lat;
        const lon = data[0].lon;

        if (type === 'start' && startMarker) {
          map.removeLayer(startMarker);
        } else if (type === 'destination' && destinationMarker) {
          map.removeLayer(destinationMarker);
        }

        if (type === 'start') {
          startMarker = L.marker([lat, lon]).addTo(map);
        } else if (type === 'destination') {
          destinationMarker = L.marker([lat, lon]).addTo(map);
        }

        fitMapToMarkers();
      } else {
        alert('Location not found. Please enter a valid location.');
      }
    })
    .catch(error => console.error('Error geocoding location:', error));
}

function fitMapToMarkers() {
  let bounds = L.latLngBounds(userMarker.getLatLng());

  if (startMarker) {
    bounds.extend(startMarker.getLatLng());
  }

  if (destinationMarker) {
    bounds.extend(destinationMarker.getLatLng());
  }

  map.fitBounds(bounds);

  map.fitBounds(bounds);
}













