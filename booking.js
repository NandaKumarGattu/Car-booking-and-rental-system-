// booking.js

$(document).ready(function() {
    // When the "Proceed" button is clicked
    $('form').on('submit', function(e) {
       // e.preventDefault(); // Prevent the default form submission

        // Show booking success message
        alert("Booking is successful");

        // Redirect to book.html after 1 second
        setTimeout(function() {
            window.location.href = "book.html";
        }, 1000);

        // Store booking.html in the browser history
        if (window.history.pushState) {
            window.history.pushState(null, "booking.html");
        } else {
            window.location.href = "book.html";
        }
    });
});
