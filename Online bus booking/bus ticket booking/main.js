const apiBaseUrl = "http://localhost:8080/api";

// Handle Search
document.getElementById("searchForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const departure = document.getElementById("departure").value;
    const arrival = document.getElementById("arrival").value;

    try {
        const response = await fetch(`${apiBaseUrl}/routes/search?departure=${departure}&arrival=${arrival}`);
        const routes = await response.json();
        displayRoutes(routes);
    } catch (error) {
        console.error("Error fetching routes:", error);
    }
});

// Display Routes
function displayRoutes(routes) {
    const routesDiv = document.getElementById("routes");
    routesDiv.innerHTML = "";

    routes.forEach((route) => {
        const routeDiv = document.createElement("div");
        routeDiv.innerHTML = `
            <p>Route: ${route.departureLocation} → ${route.arrivalLocation}</p>
            <p>Departure: ${route.departureTime}</p>
            <p>Arrival: ${route.arrivalTime}</p>
            <p>Price: $${route.price}</p>
            <button onclick="bookRoute(${route.id})">Book Now</button>
        `;
        routesDiv.appendChild(routeDiv);
    });
// Handle Booking
async function bookRoute(routeId) {
    const passengerName = prompt("Enter your name:");
    const email = prompt("Enter your email:");
    const phoneNumber = prompt("Enter your phone number:");
    const seatPreference = prompt("Enter your seat preference:");

    const bookingData = {
        passengerName,
        email,
        phoneNumber,
        routeId,
        seatPreference
    };

    try {
        const response = await fetch(`${apiBaseUrl}/bookings`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(bookingData)
        });

        if (response.ok) {
            const booking = await response.json();
            alert(`Booking successful! Booking ID: ${booking.id}`);
        } else {
            alert("Booking failed.");
        }
    } catch (error) {
        console.error("Error creating booking:", error);
    }
}

}
