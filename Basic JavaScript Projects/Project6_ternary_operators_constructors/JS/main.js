// Constructor function using "new" and "this" keywords
function Rider(height) {
    this.height = height;
    this.canRide = function () {
        return this.height >= 52 ? "You are tall enough" : "You are too short";
    };
}

// Function to display the results of the constructor function
function displayRiderStatus() {
    const heightInput = document.getElementById("height").value;
    const rider = new Rider(heightInput);
    const canRideMessage = rider.canRide();
    document.getElementById("ride").textContent = canRideMessage + " to ride.";
}

function ride_function() {
    displayRiderStatus();
}