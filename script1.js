document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Password validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return; // Stop further execution if passwords don't match
    }

    // Displaying success message
    alert("Registration successful!");
});