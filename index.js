document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get values from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    // Validate name
    if (!name) {
        document.getElementById('nameError').textContent = 'Required';
        isValid = false;
    } else if (!/^[A-Za-z]+$/.test(name)) {
        document.getElementById('nameError').textContent = 'Name should contain only alphabetic characters';
        isValid = false;
    }

    // Validate email
    if (!email) {
        document.getElementById('emailError').textContent = 'Required';
        isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format';
        isValid = false;
    }

    // Validate password
    if (!password) {
        document.getElementById('passwordError').textContent = 'Required';
        isValid = false;
    } else if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long';
        isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        // Here you could actually submit the form or perform further actions
    }
});