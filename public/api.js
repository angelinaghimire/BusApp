

$(function() {
    $("#location").autocomplete({
      source: function(request, response) {
        $.ajax({
          url: 'https://nominatim.openstreetmap.org/search',
          dataType: 'json',
          data: {
            q: request.term,
            format: 'json',
            addressdetails: 1
          },
          success: function(data) {
            var locations = data.map(function(item) {
              return item.display_name;
            });
  
            response(locations);
          },
          error: function() {
            // Handle errors or empty responses
          }
        });
      },
      minLength: 1
    });
  });
  






$(function() {
    $("#lname").autocomplete({
      source: function(request, response) {
        $.ajax({
          url: 'https://nominatim.openstreetmap.org/search',
          dataType: 'json',
          data: {
            q: request.term,
            format: 'json',
            addressdetails: 1
          },
          success: function(data) {
            var locations = data.map(function(item) {
              return item.display_name;
            });
  
            response(locations);
          },
          error: function() {
            // Handle errors or empty responses
          }
        });
      },
      minLength: 1
    });
  });
  

  