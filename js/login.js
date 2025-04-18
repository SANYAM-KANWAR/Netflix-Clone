// login.js

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get user input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (check if fields are not empty)
    if (email && password) {
        // Get stored user data from localStorage
        const storedEmail = localStorage.getItem('userEmail');
        const storedName = localStorage.getItem('userName');

        // Check if entered email matches the stored email
        if (email === storedEmail) {
            // Simulate successful login
            alert('Logged in successfully!');

            // Save user info to sessionStorage for the session
            sessionStorage.setItem('userName', storedName);
            sessionStorage.setItem('userEmail', storedEmail);

            // Redirect to profile page
            window.location.href = 'profile.html';
        } else {
            alert('Incorrect email or password');
        }
    } else {
        alert('Please fill in both fields');
    }
});
