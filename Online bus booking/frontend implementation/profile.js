const userId = 1; // Replace with the logged-in user's ID

// Fetch user profile
fetch(`http://localhost:8080/api/users/${userId}`)
    .then(response => response.json())
    .then(user => {
        document.getElementById("name").value = user.name;
        document.getElementById("email").value = user.email;
        document.getElementById("phoneNumber").value = user.phoneNumber;
        document.getElementById("paymentMethod").value = user.paymentMethod;
    });

// Update user profile
document.getElementById("profileForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const updatedUser = {
        name: document.getElementById("name").value,
        phoneNumber: document.getElementById("phoneNumber").value,
        paymentMethod: document.getElementById("paymentMethod").value
    };

    fetch(`http://localhost:8080/api/users/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedUser)
    })
        .then(response => response.json())
        .then(data => alert("Profile updated successfully!"))
        .catch(error => console.error("Error updating profile:", error));
});
