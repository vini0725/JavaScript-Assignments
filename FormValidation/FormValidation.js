function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Name validation
    if (name.trim() === '') {
        document.getElementById('nameError').innerText = 'Name is required';
        return;
    } else {
        document.getElementById('nameError').innerText = '';
    }

    // Email validation
    var emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address';
        return;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    // Password validation
    if (password === '') {
        document.getElementById('passwordError').innerText = 'Please enter your password';
        return;
    } else {
        document.getElementById('passwordError').innerText = '';
    }

    // Form submission logic
    var formData = {
        Name: name,
        Email: email
        
    };

    // Display form data in alert message
    var message = "Submitted successfully!\n\n";
    for (var key in formData) {
        message += key + ": " + formData[key] + "\n";
    }
    alert(message);
}
