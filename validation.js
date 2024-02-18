// Function to validate SignIn form
function validateSignIn() {
    var username = document.getElementById('signInUsername').value;
    var password = document.getElementById('signInPassword').value;
    if (username.trim() === '') {
        alert('Username cannot be empty');
        return false;
    }
    if (password.trim() === '') {
        alert('Password cannot be empty');
        return false;
    }
    alert('Sign In Successful');
    return true;
}

// Function to validate SignUp form
function validateSignUp() {
    var username = document.getElementById('signupUsername').value;
    var password = document.getElementById('signupPassword').value;
    var confirmPassword = document.getElementById('confirmPassword').value;
    var email = document.getElementById('signupEmail').value;
    var fullName = document.getElementById('signupFullName').value;
    var age = document.getElementById('signupAge').value;
    var address = document.getElementById('signupAddress').value;
    var city = document.getElementById('signupCity').value;

    // Regular expressions for special characters and numeric characters
    var specialCharRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var numericCharRegex = /\d/;

    if (username.trim() === '') {
        alert('Username cannot be empty');
        return false;
    }
    if (password.trim() === '') {
        alert('Password cannot be empty');
        return false;
    }
    if (confirmPassword.trim() === '') {
        alert('Please confirm your password');
        return false;
    }
    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }
    if (!specialCharRegex.test(password)) {
        alert('Password must contain at least one special character');
        return false;
    }
    if (!numericCharRegex.test(password)) {
        alert('Password must contain at least one numeric character');
        return false;
    }
    if (!isValidEmail(email)) {
        alert('Invalid email format');
        return false;
    }
    if (fullName.trim() === '') {
        alert('Full Name cannot be empty');
        return false;
    }
    if (isNaN(age) || age <= 0) {
        alert('Age must be a valid number greater than zero');
        return false;
    }
    if (address.trim() === '') {
        alert('Address cannot be empty');
        return false;
    }
    if (city.trim() === '') {
        alert('City cannot be empty');
        return false;
    }
    alert('Sign Up Successful');
    return true;
}

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
