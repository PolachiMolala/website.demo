function validateLogin() {
    // Get the values from the form inputs
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Predefined username and password
    var validUsername = "PolachiMolala";
    var validPassword = "12345";

    // Check if the username and password are correct
    if (username === validUsername && password === validPassword) {
        // If valid, display success message
        document.getElementById("error-message").innerHTML = "Login successful!";
        document.getElementById("error-message").style.color = "green";
        
        // Redirect to another webpage after successful login (e.g., dashboard.html)
        setTimeout(function() {
            window.location.href = "http://127.0.0.1:3000/Webpage.html/"; // Change this to the desired URL
        }, 1000); // Delay the redirection by 1 second for the user to see the success message
    } else {
        // If invalid, display error message
        document.getElementById("error-message").innerHTML = "Invalid username or password. Please try again.";
        document.getElementById("error-message").style.color = "red";
    }

    return false; // Prevent the form from submitting (page reload)
}
