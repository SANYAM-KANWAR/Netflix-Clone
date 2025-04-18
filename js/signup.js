// signup.js

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (check if fields are not empty)
    if (name && email && password) {
        // Save user info to localStorage
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);

        // For now, we'll simulate account creation and redirect to login page
        alert('Account created successfully! Please log in.');
        window.location.href = 'login.html'; // Redirect to login page
    } else {
        alert('Please fill in all fields');
    }
});
