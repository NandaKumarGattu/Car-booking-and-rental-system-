// rent.js

// Define an array to store booking history
var bookingHistory = [];

// Function to book a ride
function bookRide() {
    // Get the selected options from the form
    var startingPlace = document.querySelector("#bookRideForm select[name='startingPlace']").value;
    var destination = document.querySelector("#bookRideForm select[name='destination']").value;
    var variant = document.querySelector("#bookRideForm select[name='variant']").value;
    var time = document.querySelector("#bookRideForm select[name='time']").value;

    // Create a new booking object
    var newBooking = {
        startingPlace: startingPlace,
        destination: destination,
        variant: variant,
        time: time
    };

    // Push the new booking to the booking history array
    bookingHistory.push(newBooking);

    // Alert the user that the ride is booked
    alert("Ride booked successfully!");

    // Clear the form
    document.querySelector("#bookRideForm").reset();
}

// Function to view booking history
function viewHistory() {
    // Get the element where the booking history will be displayed
    var historyContainer = document.getElementById("bookingHistory");

    // Clear any previous content
    historyContainer.innerHTML = "";

    // Create a new unordered list to display the history
    var historyList = document.createElement("ul");

    // Loop through the booking history array and create list items for each booking
    bookingHistory.forEach(function(booking, index) {
        var listItem = document.createElement("li");
        listItem.textContent = "Booking " + (index + 1) + ": " + 
                                booking.startingPlace + " to " + 
                                booking.destination + " - " +
                                booking.variant + " at " + 
                                booking.time;
        historyList.appendChild(listItem);
    });

    // Append the list to the history container
    historyContainer.appendChild(historyList);

    // Show the booking history container
    historyContainer.style.display = "block";
}



    function confirmBooking() {
        var selectedSource = document.getElementById("sourceComboBox").value;
        var selectedDestination = document.getElementById("destinationComboBox").value;
        var selectedVehicle = document.getElementById("vehicleComboBox").value;
        var selectedVariant = document.getElementById("variantComboBox").value;
        var selectedTime = document.getElementById("timeField").value;

        var price = Math.random() * 1000; // Assuming generateRandomPrice() generates a random price

        var confirmation = confirm(
            "Source: " + selectedSource + "\n" +
            "Destination: " + selectedDestination + "\n" +
            "Vehicle: " + selectedVehicle + "\n" +
            "Variant: " + selectedVariant + "\n" +
            "Time: " + selectedTime + "\n" +
            "Price: ₹" + price.toFixed(2) + "\n" +
            "Confirm booking?"
        );

        if (confirmation) {
            var bookingDetails = "Source: " + selectedSource + "\n" +
                "Destination: " + selectedDestination + "\n" +
                "Vehicle: " + selectedVehicle + "\n" +
                "Variant: " + selectedVariant + "\n" +
                "Time: " + selectedTime + "\n" +
                "Price: ₹" + price.toFixed(2);

            // Assume bookingHistory is a JavaScript array to store booking details
            bookingHistory.push(bookingDetails);
            alert("Booking successful!\n" + bookingDetails);
            // Additional logic to close the window or redirect can be added here
        }
    }

