const apiUrl = "http://localhost:8080/api/users"; // Backend URL

// Handle Registration
document.getElementById("registerForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch(`${apiUrl}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password })
        });
        const result = await response.json();
        alert("User registered successfully!");
    } catch (error) {
        console.error("Registration failed:", error);
    }
});

const apiUrl = "http://localhost:8080/api/users"; // Backend URL

// Handle Login
document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
        const response = await fetch(`${apiUrl}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            const token = await response.text();
            localStorage.setItem("authToken", token); // Save JWT in localStorage
            alert("Login successful!");
        } else {
            alert("Invalid credentials.");
        }
    } catch (error) {
        console.error("Login failed:", error);
    }

// Add Authorization Header for Protected API Requests
const authToken = localStorage.getItem("authToken");
const headers = authToken ? { Authorization: `Bearer ${authToken}` } : {};
});
