const userId = 1; // Replace with the logged-in user's ID

// Fetch booking history
fetch(`http://localhost:8080/api/bookings/user/${userId}`)
    .then(response => response.json())
    .then(bookings => {
        const bookingHistoryDiv = document.getElementById("bookingHistory");
        bookingHistoryDiv.innerHTML = "";

        bookings.forEach(booking => {
            const bookingDiv = document.createElement("div");
            bookingDiv.innerHTML = `
                <p>Passenger Name: ${booking.passengerName}</p>
                <p>Route ID: ${booking.routeId}</p>
                <p>Seat Preference: ${booking.seatPreference}</p>
                <hr>
            `;
            bookingHistoryDiv.appendChild(bookingDiv);
        });
    })
    .catch(error => console.error("Error fetching booking history:", error));
});
