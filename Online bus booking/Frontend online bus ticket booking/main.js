// Base URL of your backend
const baseURL = "http://localhost:8080/api";

// Handle form submission to search buses
document.getElementById("searchForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const source = document.getElementById("source").value;
    const destination = document.getElementById("destination").value;

    try {
        // Fetch buses from backend
        const response = await fetch(`${baseURL}/buses`);
        const buses = await response.json();

        // Filter buses by source and destination
        const filteredBuses = buses.filter(bus => 
            bus.source.toLowerCase() === source.toLowerCase() &&
            bus.destination.toLowerCase() === destination.toLowerCase()
        );

        // Render buses on the page
        const resultsContainer = document.getElementById("busResults");
        resultsContainer.innerHTML = filteredBuses.length 
            ? filteredBuses.map(bus => `
                <div class="bus-card">
                    <h3>${bus.busName}</h3>
                    <p>From: ${bus.source}</p>
                    <p>To: ${bus.destination}</p>
                    <p>Fare: $${bus.fare}</p>
                    <button onclick="bookBus(${bus.id})">Book Now</button>
                </div>
              `).join("")
            : "<p>No buses found for this route.</p>";
    } catch (error) {
        console.error("Error fetching buses:", error);
    }
});

// Function to handle bus booking
function bookBus(busId) {
    alert(`Booking bus with ID: ${busId}`);
    // Implement booking logic here
}
