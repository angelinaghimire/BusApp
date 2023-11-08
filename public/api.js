<<<<<<< HEAD
=======


// $(function() {
//     $("#location").autocomplete({
//       source: function(request, response) {
//         $.ajax({
//           url: 'https://nominatim.openstreetmap.org/search',
//           dataType: 'json',
//           data: {
//             q: request.term,
//             format: 'json',
//             addressdetails: 1
//           },
//           success: function(data) {
//             var locations = data.map(function(item) {
//               return item.display_name;
//             });
  
//             response(locations);
//           },
//           error: function() {
//             // Handle errors or empty responses
//           }
//         });
//       },
//       minLength: 1
//     });
//   });

>>>>>>> 923da988634cea6e01e462923142867c29629a82
$(function() {
    $("#location").autocomplete({
      source: function(request, response) {
        $.ajax({
          url: 'https://nominatim.openstreetmap.org/search',
          dataType: 'json',
          data: {
            q: request.term,
            format: 'json',
<<<<<<< HEAD
            addressdetails: 1,
            viewbox: '85.218,27.396,85.515,27.847', 
            bounded: 1
=======
            addressdetails: 1
>>>>>>> 923da988634cea6e01e462923142867c29629a82
          },
          success: function(data) {
            var locations = data.map(function(item) {
              return item.display_name;
            });
  
            response(locations);
          },
<<<<<<< HEAD
=======
          error: function() {
            // Handle errors or empty responses
          }
>>>>>>> 923da988634cea6e01e462923142867c29629a82
        });
      },
      minLength: 1,
      select: function(event, ui) {
<<<<<<< HEAD
        $("#location").val(ui.item.value);
        return false;
=======
        // Set the selected value in the input field
        $("#location").val(ui.item.value);
        return false; // Prevent the widget from updating the input field
>>>>>>> 923da988634cea6e01e462923142867c29629a82
      }
    });
  });
  

<<<<<<< HEAD
$(function() {
    $("#destination").autocomplete({
=======




  






$(function() {
    $("#lname").autocomplete({
>>>>>>> 923da988634cea6e01e462923142867c29629a82
      source: function(request, response) {
        $.ajax({
          url: 'https://nominatim.openstreetmap.org/search',
          dataType: 'json',
          data: {
            q: request.term,
            format: 'json',
<<<<<<< HEAD
            addressdetails: 1,
            viewbox: '85.218,27.396,85.515,27.847', 
            bounded: 1
=======
            addressdetails: 1
>>>>>>> 923da988634cea6e01e462923142867c29629a82
          },
          success: function(data) {
            var locations = data.map(function(item) {
              return item.display_name;
            });
  
            response(locations);
          },
<<<<<<< HEAD
=======
          error: function() {
            // Handle errors or empty responses
          }
>>>>>>> 923da988634cea6e01e462923142867c29629a82
        });
      },
      minLength: 1
    });
  });
<<<<<<< HEAD
  
=======
  

>>>>>>> 923da988634cea6e01e462923142867c29629a82
